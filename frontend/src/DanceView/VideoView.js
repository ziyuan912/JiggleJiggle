import React from 'react';
import videojs from 'video.js';
import VideoJS from '../utils/VideoJS'

import sampleVideo from "./sample-video.mov"

function VideoView() {
  const playerRef = React.useRef(null);

  const videoJSOptions = {
    controls: true,
    responsive: true,
    aspectRatio: '3:4',
    fluid: true,
    sources: [{
      src: sampleVideo,
      type: 'video/mp4'
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  return (
    <div className='video-player-view-container'>
      {/* <VideoJS className='video-player' options={videoJSOptions} onReady={handlePlayerReady} /> */}
      <video className="video-player" controls>
        <source src={sampleVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoView;