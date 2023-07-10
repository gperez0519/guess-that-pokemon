import React, { useRef, useContext } from 'react';
import { PokemonDataContext } from '../App';

const GuessContainer = ({ showPokemonName, setShowPokemonName, setPoints }) => {
  const { pokemon, alreadyGuessed, setAlreadyGuessed, setGuessCorrect } =
    useContext(PokemonDataContext);

  const guessRef = useRef('');
  const submitGuess = () => {
    if (!alreadyGuessed) {
      if (pokemon.name.toLowerCase() === guessRef.current.value.toLowerCase()) {
        setGuessCorrect(true);
        setPoints((points) => points + 1);
      } else {
        setGuessCorrect(false);
        setPoints((points) => points - 1);
      }
      setShowPokemonName(true);
      setAlreadyGuessed(true);
      guessRef.current.value = '';
    }
  };
  if (showPokemonName)
    return <p className="pokemon-name">{pokemon.name.toUpperCase()}</p>;

  if (!showPokemonName)
    return (
      <div>
        <div className="guess-container">
          <input
            type="text"
            className="txtPokemonName"
            placeholder="Guess the name"
            ref={guessRef}
          />
        </div>
        <div className="btnContainer">
          <button className="btnPokemon" onClick={submitGuess}>
            Submit
          </button>
          <button
            onClick={() => setShowPokemonName(!showPokemonName)}
            className="btnPokemon"
          >
            I give up
          </button>
        </div>
      </div>
    );
};

export default GuessContainer;
