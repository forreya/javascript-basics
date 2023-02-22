
const fetchPokemon = (pokemonName) => {
  return new Promise((resolve, reject) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
          const pokemon = {
            name: data.name,
            id: data.id,
            height: data.height,
            weight: data.weight,
            types: data.types.map((type) => type.type.name)
          };
          resolve(pokemon);
        }
      )
    .catch((error) => reject(error));
  })
}

module.exports = fetchPokemon