
// const fetchPokemon = require('./api')

// fetchPokemon('gengar')
//   .then((pokemon) => console.log(pokemon))

class Pokedex {
  constructor() {
    this.pokemon = []
  }

  catch(newPokemon) {
    this.pokemon.push(newPokemon.name)
  }

  all() {
    return this.pokemon
  }
}

module.exports = Pokedex;