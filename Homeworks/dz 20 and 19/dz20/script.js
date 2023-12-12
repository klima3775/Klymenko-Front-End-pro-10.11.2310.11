let ladder = {
  step: 0,
  up: function () {
    this.step++;
    return this; // Повертаємо об'єкт для ланцюжка
  },
  down: function () {
    this.step--;
    return this; // Повертаємо об'єкт для ланцюжка
  },
  showStep: function () {
    // показує поточний крок
    alert(this.step);
    return this; // Повертаємо об'єкт для ланцюжка
  },
};

// Виклик методів по ланцюжку
ladder.up().up().down().showStep(); // Виведе 1
