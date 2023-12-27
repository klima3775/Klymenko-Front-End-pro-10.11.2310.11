class SuperMath {
  constructor() {}

  input() {
    return prompt("Введіть число:", "");
  }

  isValidOperators(operator) {
    const validOperators = ["+", "-", "*", "/", "%"];
    return validOperators.includes(operator);
  }

  calculate(X, Y, znak) {
    switch (znak) {
      case "+":
        return X + Y;
      case "-":
        return X - Y;
      case "*":
        return X * Y;
      case "/":
        return X / Y;
      case "%":
        return X % Y;
      default:
        return alert("Щось невірно, Перевірте правильність");
    }
  }
  check(obj) {
    const { X, Y, znak } = obj;
    if (this.isValidOperators(znak)) {
      const confirmMessage = `Ви хочете зробити дію ${znak} з числами ${X} і ${Y}? (Так/Ні)`;
      const userChoice = confirm(confirmMessage);

      if (userChoice) {
        const result = this.calculate(X, Y, znak);
        alert(`Результат: ${result}`);
      } else {
        this.inputValues(obj);
      }
    } else {
      alert(
        "Введено невірний математичний оператор. Будь ласка, введіть +, -, *, / або %."
      );
      this.inputValues(obj);
    }
  }
  inputValues(obj) {
    obj.X = this.input("Введіть перше число:");
    obj.Y = this.input("Введіть друге число:");
    obj.znak = prompt("Введіть математичний оператор (+, -, *, / або %):", "");

    this.check(obj);
  }
}

const p = new SuperMath();
const obj = { X: 12, Y: 3, znak: "/" };
p.check(obj);
