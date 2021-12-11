import React, { useState, useEffect } from "react";
import getPokemons from "./GetPokemons";
import PokemonCard from "./PokemonCard";

const AllPokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  console.log(pokemons);

  return <div>pokeidjd</div>;
};

export default AllPokemons;
