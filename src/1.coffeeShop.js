function CoffeeShop(name, menu) {
  this.name = name
  this.menu = menu
  this.orders = []
  this.totalAmount = 0
}

// Add order method
CoffeeShop.prototype.addOrder = function (...productNames) {
  this.menu.forEach((el) => {
    productNames.forEach((product) => {
      if (el.name === product) {
        this.orders.push(el)
        this.totalAmount += el.price
      }
    })
  })

  if (this.orders.length === 0) {
    throw new Error('This item is currently unavailable!')
  }

  return this.orders
}
// Fulfill Order
CoffeeShop.prototype.fulfillOrder = function (productItem) {
  if (this.orders.length > 0) {
    this.orders.forEach((orderProduct, index) => {
      if (orderProduct.name === productItem) {
        this.orders.splice(index, 1)
      }
    })
    return `The ${productItem} id ready`
  }

  return `All orders have been fulfilled!`
}
// Get total amount
CoffeeShop.prototype.dueAmount = function () {
  return `Total amount:: ${this.totalAmount}`
}
// Get cheapest product
CoffeeShop.prototype.cheapestItem = function () {
  let cheapestItem,
    cheapestPrice = Infinity

  this.menu.forEach((el) => {
    if (el.price < cheapestPrice) {
      cheapestItem = el.name
      cheapestPrice = el.price
    }
  })

  return cheapestItem
}
// Filter by type
CoffeeShop.prototype.filterByType = function (productType) {
  return this.menu.filter((el) => el.type === productType)
}

// Coffee shop name
let name = 'Coffee Car'
// Coffee shop menu
let menu = [
  { name: 'Cappuccino', type: 'Drink', price: 1.5 },
  { name: 'Espresso', type: 'Drink', price: 1.2 },
  { name: 'Dark coffee', type: 'Drink', price: 0.9 },
  { name: 'Kit-kat', type: 'Chocolate', price: 2.1 },
  { name: 'Snickers', type: 'Chocolate', price: 2 },
  { name: 'Hot chocolate', type: 'Drink', price: 1.8 },
]
// Init Coffee Car
const coffeeCar = new CoffeeShop(name, menu)

console.log(coffeeCar)
console.log(coffeeCar.addOrder('Cappuccino', 'Espresso'))
console.log(coffeeCar.fulfillOrder('Cappuccino'))
console.log(coffeeCar.orders)
console.log(coffeeCar.dueAmount())
console.log(coffeeCar.cheapestItem())
console.log(coffeeCar.filterByType('Drink'))
