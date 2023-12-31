import React, { useState, createContext } from "react";
import { useFetch } from "./hooks/useFetch";
import PokemonCard from "./components/PokemonCard";
import PokemonNavigation from "./components/PokemonNavigation";
import "@fontsource/press-start-2p"; // Defaults to weight 400
import "./style.css";

export const PokemonDataContext = createContext();

export default function App() {
  const [count, setCount] = useState(1);

  const [guessCorrect, setGuessCorrect] = useState(false);
  const [progressDirection, setProgressDirection] = useState("neutral");

  const [data, loading, error] = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${count}`
  );



  if (error) return <div className="error">{`Error occurred ${error}`}</div>;

  return (
    <PokemonDataContext.Provider
      value={{
        pokemon: data,
        count,
        guessCorrect,
        setGuessCorrect,
        setProgressDirection,
        progressDirection,
        loading
      }}
    >
      <div className="pokemon-container">
        <div className="pokemon-card-container">
          <PokemonNavigation setCount={setCount} count={count} />
          <PokemonCard />
        </div>
      </div>
    </PokemonDataContext.Provider>
  );
}
