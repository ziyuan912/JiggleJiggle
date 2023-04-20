import React from 'react';
import { Button } from 'antd';

function ToggleButton({ icon, description }) {
  
  return (
    <div className='toggle-button-container'>
      <Button icon={icon} size='large' />
      <span>{description}</span>
    </div>
  );
}

export default ToggleButton;