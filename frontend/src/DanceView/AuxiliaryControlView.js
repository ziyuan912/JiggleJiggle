import React from 'react';
import { Button } from 'antd';
import DanceScoreView from './DanceScoreView';
import ToggleButton from '../utils/ToggleButton';
import { DeploymentUnitOutlined, SyncOutlined, SwapOutlined } from '@ant-design/icons';

function AuxiliaryControlView({ auxControlState, setAuxControlState }) {
  
  const setShowKeypoints = (showKeypoints) => {
    setAuxControlState({ ...auxControlState, showKeypoints: showKeypoints });
  };

  const setLooping = (looping) => {
    setAuxControlState({ ...auxControlState, looping: looping });
  };

  const setMirroring = (mirroring) => {
    setAuxControlState({ ...auxControlState, mirroring: mirroring });
  };


  return (
    <div className='auxiliary-control-view-container'>
      <ToggleButton 
        description={'Keypoints'} 
        icon={<DeploymentUnitOutlined />} 
        state={auxControlState.showKeypoints}
        setState={setShowKeypoints}
      />
      <ToggleButton 
        description={'Looping'} 
        icon={<SyncOutlined />} 
        state={auxControlState.looping}
        setState={setLooping}  
      />
      <ToggleButton 
        description={'Mirror'} 
        icon={<SwapOutlined />} 
        state={auxControlState.mirroring}
        setState={setMirroring}
      />
      <DanceScoreView />
    </div>
  );
}

export default AuxiliaryControlView;