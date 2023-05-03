import React from 'react';
import { Button } from 'antd';
import { UndoOutlined, RedoOutlined } from '@ant-design/icons';

function SpeedControlView({ videoPlayerRef, videoPlayerState, setVideoPlayerState }) {
  



  const fastForward = deltaTime => {
    const seekTime = Math.min(videoPlayerRef.getCurrentTime() + deltaTime, videoPlayerRef.getDuration());
    videoPlayerRef.seekTo(seekTime, 'seconds');
  };

  const rewind = deltaTime => {
    const seekTime = Math.max(videoPlayerRef.getCurrentTime() - deltaTime, 0.0);
    videoPlayerRef.seekTo(seekTime, 'seconds');
  };


  const setPlaybackRate = (rate) => {
    setVideoPlayerState({ ...videoPlayerState, playbackRate: rate});
  };
  
  const playbackRateOptions = [0.25, 0.5, 0.75, 1.0];
  const playbackRateButtons = playbackRateOptions.map(rate => 
    <Button key={rate} 
      className={`speed-control-button ${rate === videoPlayerState.playbackRate ? 'selected' : ''}`}
      type='primary' 
      onClick={() => setPlaybackRate(rate)}> 
      x {rate} 
    </Button>
  );

  return (
    <div className='speed-control-view-container'>
      <Button type='text' icon={<UndoOutlined />} onClick={() => rewind(2)} size='large' />
      { playbackRateButtons }
      <Button type='text' icon={<RedoOutlined />} onClick={() => fastForward(2)} size='large' />
    </div>
  );
}

export default SpeedControlView;