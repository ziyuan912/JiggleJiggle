import React from 'react';
import Webcam from 'react-webcam';

const webcamVideoConstraints = {
  // Aspect ratio 3:4
  width: 3,
  height: 4,
  facingMode: 'user'
};

function WebcamView() {
  
  return (
    <div className='webcam-view-container'>
      <Webcam className='webcam-video' videoConstraints={webcamVideoConstraints} mirrored />
    </div>
  );
}

export default WebcamView;