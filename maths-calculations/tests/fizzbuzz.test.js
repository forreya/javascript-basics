
const fizzbuzz = require('../library/fizzbuzz')

describe('fizzbuzz', () => {
  it('returns "fizz" when given 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  });

  it('returns "buzz" when given 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
  });

  it('returns 8 when given 8', () => {
    expect(fizzbuzz(8)).toBe(8)
  })

  it('returns "Fizzbuzz" when given 15', () => {
    expect(fizzbuzz(15)).toBe("Fizzbuzz")
  })

  it('returns "fizz" when given 18', () => {
    expect(fizzbuzz(18)).toBe("fizz")
  })

  it('returns "buzz" when given 20', () => {
    expect(fizzbuzz(20)).toBe("buzz")
  })
})