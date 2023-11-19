
//Отримання рядків від користувача 
let stringOne = prompt("Введіть перший рядок");
    stringTwo = prompt("Введіть другий рядок");
    stringThree = prompt ("Введіть третій рядок");

//Виведення результату через конкатенацію

const result = stringOne + " " + stringTwo + " " + stringThree;

//Виведення результату в консоль 
console.log("Результат виконання конкатенації:" +  result); 


//Завдання 2 

// отримання числа від користувача

let number =  prompt("Введіть п'ятизначне число:");

// Отримуємо окремі цифри
let digit_1 = Math.floor(number / 10000);
number %= 10000;

let digit_2 = Math.floor(number / 1000);
number %= 1000;

let digit_3 = Math.floor(number / 100);
number %= 100;

let digit_4 = Math.floor(number / 10);
number %= 10;

let digit_5 = number;

// Виводимо цифри у вихідному порядку через пробіл
console.log(digit_1, digit_2, digit_3, digit_4, digit_5);
