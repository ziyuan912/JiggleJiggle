import React from 'react';
import CoachingFigure from './coaching-figure.png';

function CoachingOverlay() {
  return (
    <div className='coaching-overlay-container'>
      <img src={CoachingFigure} alt='Coaching figure' width='90%' />
      <p>Please position yourself at a distance from the webcam where your entire body is visible within the frame.</p>
    </div>
  );
};

export default CoachingOverlay;