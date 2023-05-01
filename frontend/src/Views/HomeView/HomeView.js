import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

function HomeView() {
  return (
    <div>
      <h1>Jiggle Jiggle</h1>
      <Link to="/dance"><Button>Start Dancing</Button></Link>
    </div>
  );
}

export default HomeView;