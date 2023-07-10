import React from 'react';
import './PointContainer.css';

const PointContainer = ({ points }) => {
  return (
    <div
      className={
        points >= 0
          ? 'point-container point-positive'
          : 'point-container point-negative'
      }
    >
      <p>Points: {points}</p>
    </div>
  );
};

export default PointContainer;
