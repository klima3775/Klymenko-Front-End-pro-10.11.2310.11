class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  static SIZE_SMALL = "small";
  static SIZE_LARGE = "large";
  static STUFFING_CHEESE = "cheese";
  static STUFFING_SALAD = "salad";
  static STUFFING_POTATO = "potato";
  static TOPPING_MAYO = "mayo";
  static TOPPING_SAUCE = "sauce";

  static PRICES = {
    small: 50,
    large: 100,
    cheese: 10,
    salad: 20,
    potato: 15,
    mayo: 20,
    sauce: 15,
  };

  static CALORIES = {
    small: 20,
    large: 40,
    cheese: 20,
    salad: 5,
    potato: 10,
    mayo: 5,
    sauce: 0,
  };

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculatePrice() {
    let price = Hamburger.PRICES[this.size] + Hamburger.PRICES[this.stuffing];
    for (const topping of this.toppings) {
      price += Hamburger.PRICES[topping];
    }
    return price;
  }

  calculateCalories() {
    let calories =
      Hamburger.CALORIES[this.size] + Hamburger.CALORIES[this.stuffing];
    for (const topping of this.toppings) {
      calories += Hamburger.CALORIES[topping];
    }
    return calories;
  }
}

//маленький гамбургер з начинкою сиру
const hamburger = new Hamburger(
  Hamburger.SIZE_SMALL,
  Hamburger.STUFFING_CHEESE
);
//додти мазік
hamburger.addTopping(Hamburger.TOPPING_MAYO);
//виведення калорійності та ціни  в консоль
console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());
//додавання приправи
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
//виведення ціни з приправою
console.log("Price with sauce: " + hamburger.calculatePrice());
