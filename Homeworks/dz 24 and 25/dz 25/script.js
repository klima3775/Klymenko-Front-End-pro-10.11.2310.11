class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfoHuman() {
    console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
  }
}

class Car {
  constructor(brand, model, year, licensePlate, owner) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.licensePlate = licensePlate;
    this.owner = this.assignOwner(owner);
  }

  assignOwner(owner) {
    if (owner.age >= 18) {
      return owner;
    } else {
      console.log(
        `Власник ${owner.name} занадто молодий для власності автомобіля.`
      );
      return null;
    }
  }

  displayInfo() {
    console.log(
      `Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, Номерний знак: ${this.licensePlate}`
    );
    if (this.owner) {
      console.log("Інформація про власника:");
      this.owner.displayInfoHuman();
    } else {
      console.log("Автомобіль не має власника.");
    }
  }
}

const human1 = new Human("Іван", 25);
const human2 = new Human("Степан", 17);

const car1 = new Car("Toyota", "Camry", 2020, "ВС1234ВС", human1);
const car2 = new Car("Honda", "Civic", 2018, "АВ5678АВ", human2);

car1.displayInfo();
console.log();
car2.displayInfo();
