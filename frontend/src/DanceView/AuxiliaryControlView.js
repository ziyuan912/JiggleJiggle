import React from 'react';
import { Button } from 'antd';
import ToggleButton from '../utils/ToggleButton';
import { DeploymentUnitOutlined, SyncOutlined, SwapOutlined } from '@ant-design/icons';

function AuxiliaryControlView() {
  
  return (
    <div className='auxiliary-control-view-container'>
      <ToggleButton description={'Keypoints'} icon={<DeploymentUnitOutlined />} />
      <ToggleButton description={'Looping'} icon={<SyncOutlined />} />
      <ToggleButton description={'Mirror'} icon={<SwapOutlined />} />
      <Button type='primary' danger>Missed</Button>
    </div>
  );
}

export default AuxiliaryControlView;