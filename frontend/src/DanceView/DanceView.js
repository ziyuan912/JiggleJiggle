import React from 'react';
import WebcamView from './WebcamView';
import VideoView from './VideoView'
import SpeedControlView from './SpeedControlView';
import AuxiliaryControlView from './AuxiliaryControlView';
import PlaybackControlView from './PlaybackControlView';
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

function DanceView() {
  return (
    <div className='dance-view-container'>
      <div className='top-dance-view-container'>
        <Button className='back-button' type='text' size='large' icon={<LeftOutlined />} />
        <SpeedControlView />
      </div>
      <div className='middle-dance-view-container'>
        <div className='dance-view-left-column'>
          <AuxiliaryControlView />
        </div>
        <div className='dance-view-middle-column'>
          <WebcamView />
          <VideoView />
        </div>
        <div className='dance-view-right-column'></div>
      </div>
      <div className='bottom-dance-view-container'>
        <PlaybackControlView />
      </div>
    </div>
  );
}

export default DanceView;