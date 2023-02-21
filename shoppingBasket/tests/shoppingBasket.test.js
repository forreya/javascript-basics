
const ShoppingBasket = require('../library/shoppingBasket')

describe('ShoppingBasket', () => {
  it('returns total price of 0 for an empty basket', () => {
    const shopping_basket = new ShoppingBasket()
    expect(shopping_basket.getTotalPrice()).toBe(0)
  })

  it('returns total price of a basket with one item', () => {
    const shopping_basket = new ShoppingBasket()
    const boostJuice = {price: 15}
    shopping_basket.addItem(boostJuice)
    expect(shopping_basket.getTotalPrice()).toBe(15)
  })

  it('returns total price of a basket with two items', () => {
    const shopping_basket = new ShoppingBasket()
    const boostJuice = {price: 15}
    const pretLatte = {price: 3}
    shopping_basket.addItem(boostJuice)
    shopping_basket.addItem(pretLatte)
    expect(shopping_basket.getTotalPrice()).toBe(18)
  })

  it('returns discounted price of a basket with two items', () => {
    const shopping_basket = new ShoppingBasket()
    const boostJuice = {price: 15}
    const pretLatte = {price: 3}
    const discount = 2
    shopping_basket.addItem(boostJuice)
    shopping_basket.addItem(pretLatte)
    shopping_basket.applyDiscount(discount)
    expect(shopping_basket.getTotalPrice()).toBe(16)
  })

})