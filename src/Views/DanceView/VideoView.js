import React, { useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import * as poseDetection from '@tensorflow-models/pose-detection';
import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';
import { RendererCanvas2d } from '../../utils/PoseRenderer/RendererCanvas2d';

import { danceSystem } from '../../Models/DanceSystem';
import sampleVideo from "./bboy.mov"


function VideoView({ videoPlayerRef, setVideoPlayerRef, videoPlayerState, setVideoPlayerState, auxControlState, setAuxControlState, fileState }) {

  const canvasRef = useRef(null);
  const onObtainPlayerRef = playerRef => {
    setVideoPlayerRef(playerRef);
  };
  const [poseDetector, setPoseDetector] = useState(null);


  const onProgress = ({ played, playedSeconds, loaded, loadedSeconds }) => {
    if (videoPlayerState.seeking) { return; }
    setVideoPlayerState({ ...videoPlayerState, played: played, playedSeconds: playedSeconds });
  };

  const mirroredStyle = {
    transform: auxControlState.mirroring? 'scaleX(-1)' : 'none'   
  };

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

  console.log(fileState.state);
  var videoURL = sampleVideo;
  if (fileState.state != null) {
    videoURL = fileState.state.url;
  }

  // Start running the detection when the webpage is first loaded.
  useEffect(() => {
    if (poseDetector == null) { return; }

    console.log("[VideoView] Run pose detector.");

    const detect = async (poseDetector) => {
      // Return the function if the video stream is not ready.
      if (videoPlayerRef == null
        || videoPlayerRef.getInternalPlayer() == null) {
        return;
      }
  
      const video = videoPlayerRef.getInternalPlayer();
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;
      video.width = videoWidth;
      video.height = videoHeight;
  
      const poses = await poseDetector.estimatePoses(video);
      danceSystem.targetPoses = poses;
  
      if (canvasRef.current == null) { return; }
      
      canvasRef.current.height = video.videoHeight;
      canvasRef.current.width = video.videoWidth;
      const renderer = new RendererCanvas2d(canvasRef.current);
      renderer.clearCtx();

      if (auxControlState.showKeypoints) {
        renderer.drawResults(poses);
      }
    };  

    const intervalId = setInterval(() => detect(poseDetector), 40);
  
    return () => {
      console.log("[VideoView] Unmount")
      clearInterval(intervalId);
    };
  }, [poseDetector, videoPlayerRef, auxControlState.showKeypoints]);

  return (
    <div className='video-player-view-container'>
      
      <div className='video-player-and-canvas-wrapper'>
        <ReactPlayer 
          className='video-player'
          ref={onObtainPlayerRef} 
          url={videoURL}
          height='100%' 
          width='fit-content' 
          playing={videoPlayerState.playing}
          playbackRate={videoPlayerState.playbackRate}
          loop={auxControlState.looping}
          style={mirroredStyle}
          onProgress={onProgress}
        />

        <canvas
          ref={canvasRef} 
          className='video-overlay-canvas' 
          style={mirroredStyle}  
        />
      </div>

    </div>
  );
}

export default VideoView;