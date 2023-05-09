import React, { useRef } from 'react';
import { Button } from 'antd';

function ToggleButton({ icon, description, state, setState }) {

  const buttonRef = useRef(null);

  const handleOnClick = () => {
    setState(!state);
  }

  return (
    <div className='toggle-button-container'>
      <Button 
        ref={buttonRef} 
        className={`toggle-button ${state ? 'enabled' : ''}`} 
        icon={icon} 
        size='large' 
        onClick={handleOnClick} />
      <div className='toggle-button-description'>{description}</div>
      <div className='toggle-button-on-off'>{state? 'On' : 'Off'}</div>
    </div>
  );
}

export default ToggleButton;