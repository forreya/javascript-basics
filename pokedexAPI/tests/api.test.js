
const fetchPokemon = require('../api')

describe('fetchPokemon', () => {
  it("returns info for Gengar", (done) => {
    fetchPokemon('gengar')
      .then((pokemon) => {
        expect(pokemon.id).toEqual(94);
        done();
      })
  })
})