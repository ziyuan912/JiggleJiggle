import React, { useEffect, useRef } from 'react';
import { Button } from 'antd';
import { danceSystem } from '../DanceSystem/DanceSystem';

function DanceScoreView() {

  const buttonRef = useRef(null);

  // Evaluate the dance every 500ms.
  const evaluateRate = 500;
  useEffect(() => {
    const intervalId = setInterval(() => {
      const danceScore = danceSystem.evaluatePoses();
      // TODO: Any elegent way?
      buttonRef.current.innerHTML = danceScore.toFixed(3);
    }, evaluateRate);

    // Clear the interval when the component unamounts.
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='dance-score-view-container'>
      <Button ref={buttonRef} type='primary' danger>0</Button>
    </div>
  );
};

export default DanceScoreView;