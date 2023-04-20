import React from 'react';
import { Button } from 'antd';
import { UndoOutlined, RedoOutlined } from '@ant-design/icons';

function SpeedControlView() {
  
  return (
    <div className='speed-control-view-container'>
      <Button type='text' icon={<UndoOutlined />} size='large' />
      <Button>x 0.25</Button>
      <Button>x 0.5</Button>
      <Button>x 0.75</Button>
      <Button>x 1</Button>
      <Button type='text' icon={<RedoOutlined />} size='large' />
    </div>
  );
}

export default SpeedControlView;