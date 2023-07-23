import React from "react";
import "./PointContainer.css";
import { useContext } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { PokemonDataContext } from "../App";

const PointContainer = ({ points }) => {
  const { progressDirection } = useContext(PokemonDataContext);

  return (
    <div
      className={
        points >= 0
          ? "point-container point-positive"
          : "point-container point-negative"
      }
    >
      <div>
        <p>
          Points: {points}{" "}
          <span>
            {progressDirection === "up" && (
              <FaArrowUp className="point-positive" />
            )}
          </span>
          <span>
            {progressDirection === "down" && (
              <FaArrowDown className="point-negative" />
            )}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PointContainer;
