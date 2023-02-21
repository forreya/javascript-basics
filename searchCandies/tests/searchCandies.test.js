
const searchCandies = require('../library/searchCandies');

describe('search candies', () => {
  it('returns Mars & Maltesers', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers'])
  })
  
  it('returns Mars', () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars'])
  })

  it('returns Skitties, Skittles & Maltesers', () => {
    expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst'])
  })

  it('returns Mars & Maltesers', () => {
    expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles'])
  })

  it('returns Mars & Maltesers when passed in lowercase', () => {
    expect(searchCandies('ma', 10)).toEqual(['Mars', 'Maltesers'])
  })
})
