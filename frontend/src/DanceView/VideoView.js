import React, { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player'
import * as poseDetection from '@tensorflow-models/pose-detection';
import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';
import { RendererCanvas2d } from '../utils/PoseRenderer/RendererCanvas2d';

import { danceSystem } from '../DanceSystem/DanceSystem';
import sampleVideo from "./sample-video.mov"

function VideoView({ videoPlayerRef, setVideoPlayerRef, videoPlayerState, setVideoPlayerState, auxControlState, setAuxControlState }) {

  const canvasRef = useRef(null);
  const onObtainPlayerRef = playerRef => {
    setVideoPlayerRef(playerRef);
  }

  const onProgress = ({ played, playedSeconds, loaded, loadedSeconds }) => {
    if (videoPlayerState.seeking) { return; }
    setVideoPlayerState({ ...videoPlayerState, played: played, playedSeconds: playedSeconds });
  };

  const mirroredStyle = {
    transform: auxControlState.mirroring? 'scaleX(-1)' : 'none'   
  };

  // FIXME: This hook should not depend on auxv control state.
  // Start running the detection when the webpage is first loaded.
  useEffect(() => {
    console.log("[VideoView] Load pose detection model and run detection.");

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
  
      if (canvasRef.current != null) {
        canvasRef.current.width = video.videoWidth;
        canvasRef.current.height = video.videoHeight;
        const renderer = new RendererCanvas2d(canvasRef.current);
        renderer.clearCtx();
        renderer.drawResults(poses);
      }
    };  

    let intervalId = -1;
    const runDetection = async () => {
      const model = poseDetection.SupportedModels.BlazePose;
      const detectorConfig = {
        runtime: 'tfjs',
        enableSmoothing: true,
        modelType: 'full'
      };
      const poseDetector = await poseDetection.createDetector(model, detectorConfig);
  
      intervalId = setInterval(() => detect(poseDetector), 40);
    };
    runDetection();
  
    return () => {
      console.log("[VideoView] Unmount")
      clearInterval(intervalId);
    };
  }, [videoPlayerRef]);

  return (
    <div className='video-player-view-container'>
      
      <div className='video-player-and-canvas-wrapper'>
        <ReactPlayer 
          className='video-player'
          ref={onObtainPlayerRef} 
          url={sampleVideo}
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