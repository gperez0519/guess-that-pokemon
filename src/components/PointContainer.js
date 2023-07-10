import React from "react";
import "./PointContainer.css";
import { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const PointContainer = ({ points }) => {
  const [prevPoints, setPrevPoints] = useState(points);

  useEffect(() => {
    setPrevPoints(points);
  }, [points]);

  return (
    <div
      className={
        points >= 0
          ? "point-container point-positive"
          : "point-container point-negative"
      }
    >
      <p>
        Points: {points} {prevPoints < points && <FaArrowUp />}
        {points > prevPoints && <FaArrowDown className="point-negative" />}
      </p>
    </div>
  );
};

export default PointContainer;
