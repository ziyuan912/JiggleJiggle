import React, { useState, useEffect } from "react";
import { danceSystem } from "../../../Models/DanceSystem";
import "./DanceScoreView.css";

function TestDanceScore({ score }) {
  return <h2 className="dance-score good">{score}</h2>;
}

function PerfectDanceScore() {
  return <h2 className="dance-score perfect">PERFECT!</h2>;
}

function GoodDanceScore() {
  return <h2 className="dance-score good">GOOD!</h2>;
}

function MissDanceScore() {
  return <h2 className="dance-score miss">MISS...</h2>;
}

function DanceScoreView({ id }) {
  const [ danceScoreComponents, setDanceScoreComponents ] = useState([]);

  // Evaluate the dance every 500ms.
  const evaluateRate = 500;
  
  // How long a dance score component can stay on screen.
  const danceScoreTimeout = 1000;

  useEffect(() => {
    const intervalId = setInterval(() => {

      danceSystem.evaluatePoses();
      const danceScore = danceSystem.danceScore;
      const visibleKeypoints = danceSystem.matchedKeypoints;
      const danceConfidence = danceSystem.userPoseConfidence;

      // Reject if visible keypoints are too few or confidence too low.
      if (visibleKeypoints < 6 || danceConfidence < 0.85) { return; }

      let danceScoreComponent = null;
      // danceScoreComponent = <TestDanceScore key={Date.now()} score={danceScore} />;
      if (danceScore > 90) { 
        danceScoreComponent = <PerfectDanceScore key={Date.now()} />;
      } else if (danceScore > 85) {
        danceScoreComponent = <GoodDanceScore key={Date.now()} />;
      } else if (danceScore < 70) {
        danceScoreComponent = <MissDanceScore key={Date.now()} />;
      } else {
        return;
      }
      
      setDanceScoreComponents(prevComponents => [
        ...prevComponents,
        danceScoreComponent
      ]);

      setTimeout(() => {
        setDanceScoreComponents(prevComponents => prevComponents.slice(1));
      }, danceScoreTimeout);
    }, evaluateRate);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
    

  return (
    <div className="dance-score-view"> {danceScoreComponents} </div>
  );
}

export default DanceScoreView;
