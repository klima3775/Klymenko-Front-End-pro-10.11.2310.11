class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  constructor() {
    this.residents = [];
  }

  addResident(person) {
    this.residents.push(person);
  }
}

class Building {
  constructor(maxApartments) {
    this.apartments = [];
    this.maxApartments = maxApartments;
  }

  addApartment(apartment) {
    if (this.apartments.length < this.maxApartments) {
      this.apartments.push(apartment);
    } else {
      console.log(
        "Максимальна кількість квартир досягнута. Неможливо додати ще одну квартиру."
      );
    }
  }
}

const person1 = new Person("Іван", "чоловіча");
const person2 = new Person("Марія", "жіноча");
const person3 = new Person("Олександр", "чоловіча");

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

apartment1.addResident(person1);
apartment2.addResident(person2);
apartment3.addResident(person3);

const building = new Building(3);

building.addApartment(apartment1);
building.addApartment(apartment2);

building.addApartment(apartment3);
