import React, { useEffect, useRef } from 'react';
import { Button } from 'antd';
import { danceSystem } from '../DanceSystem/DanceSystem';

function OldDanceScoreView() {

  const buttonRef = useRef(null);

  // Evaluate the dance every 500ms.
  const evaluateRate = 500;
  useEffect(() => {
    const perfectScoreClassName = 'perfect-score';
    const goodScoreClassName = 'good-score';
    const missedScoreClassName = 'missed-score';

    const intervalId = setInterval(() => {
      buttonRef.current.classList.remove(perfectScoreClassName);
      buttonRef.current.classList.remove(goodScoreClassName);
      buttonRef.current.classList.remove(missedScoreClassName);

      const danceScore = danceSystem.evaluatePoses();
      if (danceScore > 90) { 
        buttonRef.current.innerHTML = 'Perfect!';
        buttonRef.current.classList.add(perfectScoreClassName);
      } else if (danceScore > 80) {
        buttonRef.current.innerHTML = 'Good!';
        buttonRef.current.classList.add(goodScoreClassName);
      } else {
        buttonRef.current.innerHTML = 'Missed...';
        buttonRef.current.classList.add(missedScoreClassName);
      }

      // buttonRef.current.innerHTML = danceScore.toFixed(3);
    }, evaluateRate);

    // Clear the interval when the component unamounts.
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='dance-score-view-container'>
      <Button ref={buttonRef} type='primary'></Button>
    </div>
  );
};

export default OldDanceScoreView;