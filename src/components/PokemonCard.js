import React, { useState, useEffect, useContext } from 'react';
import GuessContainer from './GuessContainer';
import PointContainer from './PointContainer';
import './PokemonCard.css';
import { PokemonDataContext } from '../App';

const PokemonCard = () => {
  const [showPokemonName, setShowPokemonName] = useState(false);

  const [points, setPoints] = useState(0);
  const { pokemon, count, guessCorrect } = useContext(PokemonDataContext);

  useEffect(() => {
    setShowPokemonName(false);
  }, [count]);

  return (
    <div className="pokemon-card">
      <PointContainer points={points} />
      <div className="pokemon">
        {pokemon && (
          <>
            <div className="pokemon-pic-container">
              <img
                src={pokemon.sprites.other['official-artwork'].front_default}
                className={
                  showPokemonName ? 'pokemon-img-show' : 'pokemon-img-hidden'
                }
                alt="Pokemon"
                width={200}
              />
              <span
                className={`one-plus-point ${guessCorrect && 'animate-point'}`}
              >
                +1
              </span>
            </div>

            <div className="pokemon-name-container">
              <GuessContainer
                showPokemonName={showPokemonName}
                setShowPokemonName={setShowPokemonName}
                setPoints={setPoints}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PokemonCard;
