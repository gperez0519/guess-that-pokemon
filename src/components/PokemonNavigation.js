import React, { useContext } from "react";
import { PokemonDataContext } from "../App";
import "./PokemonNavigation.css";

const PokemonNavigation = ({ count, setCount }) => {
  const { setGuessCorrect } = useContext(PokemonDataContext);

  const navigatePrev = () => {
    setCount(count - 1);
    setGuessCorrect(false);
  }

  const navigateNext = () => {
    setCount(count + 1);
    setGuessCorrect(false);
  }


  return (
    <div className="pokemon-nav-links">
      <button
        className={count < 2 ? "btnPokemon disabled" : "btnPokemon"}
        disabled={count < 2}
        onClick={navigatePrev}
      >
        Prev
      </button>
      <button
        className="btnPokemon"
        onClick={navigateNext}
      >
        Next
      </button>
    </div>
  );
};
export default PokemonNavigation;
