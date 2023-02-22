
const Pokedex = require('../pokedex');
const fetchPokemon = require('../api');

describe('Pokedex', () => {
  it('adds two pokemon and returns them (mocking)', () => {
    const pokedex = new Pokedex()
    const pikachu = {name: "pikachu"}
    const gengar = {name: "gengar"}
    pokedex.catch(pikachu)
    pokedex.catch(gengar)
    expect(pokedex.all()).toEqual(['pikachu','gengar'])
  })

  it('adds two pokemon and returns them (using API)', async () => {
    const pokedex = new Pokedex()
    const pikachu = await fetchPokemon('pikachu')
    const gengar = await fetchPokemon('gengar')
    pokedex.catch(pikachu)
    pokedex.catch(gengar)
    expect(pokedex.all()).toEqual(['pikachu','gengar'])
  })
})