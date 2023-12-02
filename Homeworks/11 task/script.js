//Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
}

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

const exchangeRate = 27; // обмінний курс 1 долара до гривень

for (let dollars = 10; dollars <= 100; dollars += 10) {
  const uah = dollars * exchangeRate;
  console.log(`${dollars} доларів = ${uah} гривень`);
}

//Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

const N = 100; // ваше задане число

for (let i = 1; i <= 100; i++) {
  const square = i * i;
  if (square <= N) {
    console.log(`Число: ${i}, Квадрат: ${square}`);
  }
}

//Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

const yourNumber = 17; 

if (yourNumber <= 1) {
  console.log(`${yourNumber} - не просте число`);
} else {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(yourNumber); i++) {
    if (yourNumber % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${yourNumber} - просте число`);
  } else {
    console.log(`${yourNumber} - не просте число`);
  }
}

//Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

const youNumber = 81; 

let currentNumber = 1;
let exponent = 0;

while (currentNumber < youNumber) {
  currentNumber = Math.pow(3, exponent);
  exponent++;
}

if (currentNumber === youNumber) {
  console.log(`${youNumber} можна отримати шляхом зведення 3 у ступінь ${exponent - 1}`);
} else {
  console.log(`${youNumber} не можна отримати зведенням 3 у яку-небудь ступінь`);
}
