
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
const number = prompt("Введіть п'ятизначне число:");

//
const resultDigits = number.split('').join(' ');
console.log("Результат розбиття за цифрами: " + resultDigits);
