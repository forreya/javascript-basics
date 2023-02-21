
class ShoppingBasket {
  constructor() {
    this.totalPrice = 0
    this.discount = 0
  }

  addItem(item) {
    this.totalPrice += item.price;
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
    return this.totalPrice - this.discount
  }
}

module.exports = ShoppingBasket