import React, { useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import * as poseDetection from '@tensorflow-models/pose-detection';
import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';

import { RendererCanvas2d } from '../utils/PoseRenderer/RendererCanvas2d';

const webcamVideoConstraints = {
  facingMode: 'user',
  width: 640,
  height: 640
};

function WebcamView({ auxControlState }) {
  
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // FIXME: This code block should enter only once, but it is entered 2 times.
  // FIXME: This hook should not depend on auxv control state.
  // Start running the detection when the webpage is first loaded.
  useEffect(() => {
    console.log("[WebcamView] Load pose detection model and run detection.");

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
  
      if (canvasRef.current != null) {
        canvasRef.current.width = webcamRef.current.video.videoWidth;
        canvasRef.current.height = webcamRef.current.video.videoHeight;
  
        const renderer = new RendererCanvas2d(canvasRef.current);
        renderer.clearCtx();
        renderer.drawResults(poses);
      }
    };
  
    const runDetection = async () => {
      // const movenet = poseDetection.SupportedModels.MoveNet;
      // const poseDetectorConfig = { modelType: poseDetection.movenet.SINGLEPOSE_THUNDER }
      // const poseDetector = await poseDetection.createDetector(movenet, poseDetectorConfig);
  
      const model = poseDetection.SupportedModels.BlazePose;
      const detectorConfig = {
        runtime: 'tfjs',
        enableSmoothing: true,
        modelType: 'lite'
      };
      const poseDetector = await poseDetection.createDetector(model, detectorConfig);
  
      setInterval(() => detect(poseDetector), 40);
    };
  
    runDetection();
  }, []);

  return (
    <div className='webcam-view-container'>
      <Webcam ref={webcamRef} className='webcam-video' videoConstraints={webcamVideoConstraints} />
      <canvas ref={canvasRef} className='webcam-overlay-canvas' />
    </div>
  );
}

export default WebcamView;