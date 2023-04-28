import React from 'react';
import { Button, Typography } from 'antd';

const { Text } = Typography;


function ToggleButton({ icon, description, state, setState }) {

  const handleOnClick = () => {
    setState(!state);
  }

  return (
    <div className='toggle-button-container'>
      <Button icon={icon} size='large' onClick={handleOnClick} />
      <div className='toggle-button-description'>{description}</div>
      <div className='toggle-button-on-off'>{state? 'On' : 'Off'}</div>
    </div>
  );
}

export default ToggleButton;