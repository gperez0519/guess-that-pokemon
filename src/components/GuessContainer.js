import React, { useRef, useContext, useEffect } from "react";
import { PokemonDataContext } from "../App";

const GuessContainer = ({ showPokemonName, setShowPokemonName, setPoints }) => {
  const {
    count,
    pokemon,
    setGuessCorrect,
    setProgressDirection,
  } = useContext(PokemonDataContext);

  const guessRef = useRef("");

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (event.key === "Enter" && guessRef.current) {
        // Trigger the submit guess
        document.getElementById('btnGuessSubmit').click();
      }
    });

    return () => {
      document.removeEventListener('keydown', () => { });
    }
  }, []);

  useEffect(() => {
    // Clear the name input if there is a change in navigation
    if (guessRef.current) {
      guessRef.current.value = "";
      guessRef.current.focus();
    }
  }, [count, showPokemonName]);


  const submitGuess = () => {
    if (pokemon.name.toLowerCase() === guessRef.current.value.toLowerCase()) {
      setGuessCorrect(true);
      setPoints((prevPoints) => prevPoints + 1);
      setProgressDirection("up");
    } else {
      setGuessCorrect(false);
      setPoints((prevPoints) => prevPoints - 1);
      setProgressDirection("down");
    }
    setShowPokemonName(true);
    guessRef.current.value = "";
  };


  return showPokemonName ? (<p className="pokemon-name">{pokemon.name.toUpperCase()}</p>) : (<div>
    <div className="guess-container">
      <input
        id="guessInput"
        type="text"
        className="txtPokemonName"
        placeholder="Guess the name"
        ref={guessRef}
        maxLength="20"
      />
    </div>
    <div className="btnContainer">
      <button
        id="btnGuessSubmit"
        className="btnPokemon"
        onClick={submitGuess}
      >
        Submit
      </button>
      <button
        onClick={() => setShowPokemonName(!showPokemonName)}
        className="btnPokemon"
      >
        I give up
      </button>
    </div>
  </div>)
};

export default GuessContainer;
