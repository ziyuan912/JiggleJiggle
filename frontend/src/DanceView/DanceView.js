import React, { useState } from 'react';
import WebcamView from './WebcamView';
import VideoView from './VideoView'
import SpeedControlView from './SpeedControlView';
import AuxiliaryControlView from './AuxiliaryControlView';
import PlaybackControlView from './PlaybackControlView';
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

function DanceView() {
  const [videoPlayerRef, setVideoPlayerRef] = useState(null);

  const [videoPlayerState, setVideoPlayerState] = useState({
    playerRef: null,
    playing: false,
    seeking: false,
    played: 0,  // Duration of video played, in percentage [0, 1]
    playedSeconds: 0,  // Duration of video played, in seconds
  });

  const [auxControlState, setAuxControlState] = useState({
    showKeypoints: false,
    looping: false,
    mirroring: false
  });

  return (
    <div className='dance-view-container'>
      <div className='top-dance-view-container'>
        <Button className='back-button' type='text' size='large' icon={<LeftOutlined />} />
        <SpeedControlView videoPlayerRef={videoPlayerRef} videoPlayerState={videoPlayerState} setVideoPlayerState={setVideoPlayerState} />
      </div>
      <div className='middle-dance-view-container'>
        <div className='dance-view-left-column'>
          <AuxiliaryControlView auxControlState={auxControlState} setAuxControlState={setAuxControlState} />
        </div>
        <div className='dance-view-middle-column'>
          <WebcamView auxControlState={auxControlState} />
          <VideoView 
            videoPlayerRef={videoPlayerRef}
            setVideoPlayerRef={setVideoPlayerRef}
            videoPlayerState={videoPlayerState} 
            setVideoPlayerState={setVideoPlayerState}
            auxControlState={auxControlState}
            setAuxControlState={setAuxControlState}
          />
        </div>
        <div className='dance-view-right-column'></div>
      </div>
      <div className='bottom-dance-view-container'>
        <PlaybackControlView videoPlayerRef={videoPlayerRef} videoPlayerState={videoPlayerState} setVideoPlayerState={setVideoPlayerState}/>
      </div>
    </div>
  );
}

export default DanceView;