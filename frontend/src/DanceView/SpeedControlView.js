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
  
  return (
    <div className='speed-control-view-container'>
      <Button type='text' icon={<UndoOutlined />} onClick={() => rewind(2)} size='large' />
      <Button onClick={() => setPlaybackRate(0.25)}>x 0.25</Button>
      <Button onClick={() => setPlaybackRate(0.5)}>x 0.5</Button>
      <Button onClick={() => setPlaybackRate(0.75)}>x 0.75</Button>
      <Button onClick={() => setPlaybackRate(1)}>x 1</Button>
      <Button type='text' icon={<RedoOutlined />} onClick={() => fastForward(2)} size='large' />
    </div>
  );
}

export default SpeedControlView;