//Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const array = [10, "a", 40, "b", 5, "c"];

function calculateAverage(array) {
  const numericElement = array.filter(
    (element) => typeof element === "number" && !isNaN(element)
  );
  const sum = numericElement.reduce((acc, current) => acc + current);

  if (numericElement.length === 0) {
    return 0;
  }
  return sum / numericElement.length;
}

const result = calculateAverage(array);

console.log(result.toFixed(2));

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії,
// вказаної в змінній znak.Обидва числа і знак виходять від користувача.

function doMath(x, znak, y) {
  let sum;
  switch (znak) {
    case "+":
      sum = x + y;
      break;
    case "-":
      sum = x - y;
      break;
    case "*":
      sum = x * y;
      break;
    case "/":
      if (y !== 0) {
        sum = x / y;
      } else {
        sum = "Ділення на 0 неможливе";
      }
      break;
    case "%":
      if (y !== 0) {
        x % y;
      } else {
        sum = "Ділення на нуль неможливе";
      }
      break;
    case "^":
      sum = Math.pow(x, y);
      break;
    default:
      sum = "Невідомий оператор";
  }
  return sum;
}

console.log(doMath(3, "+", 0));

//Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач

function fillArrayNumber() {
  const numMass = +prompt("Введіть кількість масивів:");
  const itemMass = +prompt("Введіть кількість елементів для кожного масиву:");

  //Перевірка коректності
  if (isNaN(numMass) || isNaN(itemMass) || numMass <= 0 || itemMass <= 0) {
    return console.log(
      "Некоректні дані. Будь ласка, введіть додатні цілі числа."
    );
  }

  const resultArray = [];

  for (let i = 0; i < numMass; i++) {
    //константа яка зберігає внутрішній масив
    const innerArray = [];

    for (let j = 0; j < itemMass; j++) {
      const value = prompt(
        `Введіть значення для елемента [${i + 1}][${j + 1}]:`
      );
      innerArray.push(value);
    }
    resultArray.push(innerArray);
  }
  return resultArray;
}

const userArray = fillArrayNumber();

console.log("Отриманий двомірний масив:", userArray);

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

function removeElements(inputString, deleteElements) {
  const destructure = inputString.split("");
  const filtteredDestructure = destructure.filter(
    (char) => !deleteElements.includes(char) // не дуже хочу робити циклом, тому використовую Includes
  );

  const resultString = filtteredDestructure.join("");

  return resultString;
}

const inputString = " hello world";
const deleteElements = ["l", "d"];

const result1 = removeElements(inputString, deleteElements);

console.log(result1);
