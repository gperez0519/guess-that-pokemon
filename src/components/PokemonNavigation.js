import React, { useContext } from "react";
import { PokemonDataContext } from "../App";
import "./PokemonNavigation.css";

const PokemonNavigation = ({ count, setCount }) => {
  const { setAlreadyGuessed, setGuessCorrect } = useContext(PokemonDataContext);
  return (
    <div className="pokemon-nav-links">
      <button
        className={count < 2 ? "disabled" : ""}
        disabled={count < 2}
        onClick={() => {
          setCount(count - 1);
          setAlreadyGuessed(false);
          setGuessCorrect(false);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
          setAlreadyGuessed(false);
          setGuessCorrect(false);
        }}
      >
        Next
      </button>
    </div>
  );
};
export default PokemonNavigation;
