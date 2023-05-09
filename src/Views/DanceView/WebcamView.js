import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import * as poseDetection from '@tensorflow-models/pose-detection';
import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';

import DanceScoreView from './DanceScoreView/DancsScoreView';
import CoachingOverlay from './CoachingOverlay/CoachingOverlay';
import { danceSystem } from '../../Models/DanceSystem';
import { RendererCanvas2d } from '../../utils/PoseRenderer/RendererCanvas2d';

const webcamVideoConstraints = {
  facingMode: 'user',
  width: 640,
  height: 640
};

function WebcamView({ auxControlState }) {
  
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const coachingOverlayRef = useRef(null);
  const [poseDetector, setPoseDetector] = useState(null);

  // Create pose detector when the webpage is loaded.
  useEffect(() => {
    const model = poseDetection.SupportedModels.BlazePose;
    const detectorConfig = {
      runtime: 'tfjs',
      enableSmoothing: true,
      modelType: 'full'
    };
    poseDetection.createDetector(model, detectorConfig)
      .then(detector => {
        setPoseDetector(detector);
      });
  }, []);

  // Start running the pose detector.
  useEffect(() => {
    if (poseDetector == null) { return; }

    console.log("[WebcamView] Run pose detector.");
    const detect = async (poseDetector) => {
      // Return the function if the webcam video stream is not ready.
      if (typeof webcamRef.current == 'undefined' 
      || webcamRef.current == null 
      || webcamRef.current.video.readyState !== 4) {
        return;
      }
  
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;
  
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;
  
      const poses = await poseDetector.estimatePoses(video);
      danceSystem.userPoses = poses;
  
      if (canvasRef.current == null) { return; } 

      canvasRef.current.width = webcamRef.current.video.videoWidth;
      canvasRef.current.height = webcamRef.current.video.videoHeight;
      const renderer = new RendererCanvas2d(canvasRef.current);
      renderer.clearCtx();
      
      if (auxControlState.showKeypoints) {
        renderer.drawResults(poses);
      }
    };
  
    const intervalId = setInterval(() => detect(poseDetector), 40);
  
    return () => {
      clearInterval(intervalId);
    };
  }, [poseDetector, auxControlState.showKeypoints]);

  // Show the coaching overlay if too view keypoints detected.
  useEffect(() => {

    const intervalId = setInterval(() => {
      if (coachingOverlayRef == null) { return; }
      if (danceSystem.matchedKeypoints < 6 || danceSystem.userPoseConfidence < 0.85) {
        coachingOverlayRef.current.style.visibility = 'visible';
      } else {
        coachingOverlayRef.current.style.visibility = 'hidden';
      }
    }, 200);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  
  return (
    <div className='webcam-view-container'>
      <Webcam ref={webcamRef} className='webcam-video' videoConstraints={webcamVideoConstraints} />
      <canvas ref={canvasRef} className='webcam-overlay-canvas' />

      <div className='dance-score-view-wrapper'>
        <DanceScoreView />
      </div>
      <div className='coaching-overlay-wrapper' ref={coachingOverlayRef}>
        <CoachingOverlay  />
      </div>
    </div>
  );
}

export default WebcamView;