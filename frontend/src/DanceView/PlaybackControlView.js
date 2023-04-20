import React from 'react';
import { Button, Slider } from 'antd';
import { BackwardOutlined, PauseOutlined, CaretRightOutlined, ForwardOutlined } from '@ant-design/icons';

function PlaybackControlView() {
  
  return (
    <div className='playback-control-view-container'>
      <span>
        <Button type='text' icon={<BackwardOutlined />} />
        <Button type='text' icon={<PauseOutlined />} />
        <Button type='text' icon={<CaretRightOutlined />} />
        <Button type='text' icon={<ForwardOutlined />} />
      </span>
      <Slider className='video-playback-slider' tooltip={{ formatter: null }} />
    </div>
  );
}

export default PlaybackControlView;