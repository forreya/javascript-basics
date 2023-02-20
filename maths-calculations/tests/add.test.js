
const add = require('../library/add');

describe('add', () => {
  it('adds 2 and 2', () => {
    expect(add(2,2)).toBe(4);
  });

  it('adds 0 and 5', () => {
    expect(add(0,5)).toBe(5);
  })

  it('adds 7 and 8', () => {
    expect(add(7,8)).toBe(15);
  })
});