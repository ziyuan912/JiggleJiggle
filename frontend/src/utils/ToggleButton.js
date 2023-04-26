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
      <Text>{description}</Text>
      <Text type='secondary'>{state? 'On' : 'Off'}</Text>

    </div>
  );
}

export default ToggleButton;