import React from 'react';
import { Button, Slider } from 'antd';
import { BackwardOutlined, PauseOutlined, CaretRightOutlined, ForwardOutlined } from '@ant-design/icons';

function PlaybackControlView({ videoPlayerRef, videoPlayerState, setVideoPlayerState }) {
  
  const handleOnPause = () => {
    setVideoPlayerState({ ...videoPlayerState, playing: false });
  }
  
  const handleOnPlay = () => {
    setVideoPlayerState({ ...videoPlayerState, playing: true });
  }
  
  const handleSliderChange = value => {
    setVideoPlayerState({ ...videoPlayerState, seeking: true, played: value });
    videoPlayerRef.seekTo(value, 'fraction');
  };

  const handleAfterSliderChange = value => {
    setVideoPlayerState({ ...videoPlayerState, seeking: false, played: value });
    videoPlayerRef.seekTo(value, 'fraction');
  };

  const fastForward = deltaTime => {
    const seekTime = Math.min(videoPlayerRef.getCurrentTime() + deltaTime, videoPlayerRef.getDuration());
    videoPlayerRef.seekTo(seekTime, 'seconds');
  };

  const rewind = deltaTime => {
    const seekTime = Math.max(videoPlayerRef.getCurrentTime() - deltaTime, 0.0);
    videoPlayerRef.seekTo(seekTime, 'seconds');
  };

  return (
    <div className='playback-control-view-container'>
      <span>
        <Button type='text' icon={<BackwardOutlined />} onClick={() => rewind(2)} />
        <Button type='text' icon={<PauseOutlined />} onClick={handleOnPause} />
        <Button type='text' icon={<CaretRightOutlined />} onClick={handleOnPlay} />
        <Button type='text' icon={<ForwardOutlined />} onClick={() => fastForward(2) } />
      </span>
      <Slider 
        min={0}
        max={1}
        step={0.001}
        value={videoPlayerState.played}
        className='video-playback-slider' 
        tooltip={{ formatter: null }} 
        onChange={handleSliderChange}
        onAfterChange={handleAfterSliderChange}  
      />
    </div>
  );
}

export default PlaybackControlView;