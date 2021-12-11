const url = "https://pokeapi.co/api/v2/pokemon";

const getPokemons = () => {
  return fetch(url).then((response) => response.json());
};

export default getPokemons;
