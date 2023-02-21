
const multiply = require('../library/multiply');

describe('multiply', () => {
  it('multiplies 2 by 2', () => {
    expect(multiply(2,2)).toBe(4);
  })
})