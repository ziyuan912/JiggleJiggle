import React from 'react';
import Webcam from 'react-webcam';

const webcamVideoConstraints = {
  // Aspect ratio 3:4
  width: 3,
  height: 4,
  facingMode: 'user'
};

function WebcamView() {
  
  let videoFeedURL = "http://127.0.0.1:8000/poseMatching/video_feed";

  return (
    <div className='webcam-view-container'>
      <Webcam className='webcam-video' videoConstraints={webcamVideoConstraints} />
      {/* <img className='webcam-video' src={videoFeedURL} width={1000} /> */}
    </div>
  );
}

export default WebcamView;