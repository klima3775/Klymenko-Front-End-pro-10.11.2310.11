// Вивести на сторінку в один рядок через кому числа від 10 до 20.

let numberString = [];

for(let i = 10; i <=20; i++){

    numberString.push(i);

}

console.log(numberString);

//Вивести квадрати чисел від 10 до 20.

for(let i = 10; i <= 20; i++){
    let square = i * i;
    console.log(`Квадрат числа ${i}: ${square}`);
}

// Вивести таблицю множення на 7.

for(let i = 1; i <= 10; i++) {
    let result = 7 * i;
    console.log(`7 * ${i} = ${result}`);
}

// Знайти суму всіх цілих чисел від 1 до 15.

let sum = 0;

for(let i = 1; i <= 15; i++){
        sum +=  i;
    console.log(`Сума числа ${i}: ${sum}`);
}

// Знайти добуток усіх цілих чисел від 15 до 35

let multi = BigInt(1);

for(let i = 15n; i <= 35n; i++){
    
    multi *= i; 
}
console.log(`Добуток усіх цілих чисел від 15 до 35: ${multi}`);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let sum2 = 0;

for (let i = 1; i <= 500; i++){
    sum2 += i;
}

let count = 500;
let average = sum2 / count;

console.log(`Середнє арифметичне чисел від 1 до 500: ${average}`);


//Вивести суму лише парних чисел в діапазоні від 30 до 80.

let sum3 = 0;

for(let i = 30; i <= 80; i++){
    if(i % 2 == 0){
        sum3 += i;
    }
}

console.log(`Сума парних чисел від 30 до 80:${sum3}`);


//Вивести всі числа в діапазоні від 100 до 200 кратні 3.

for(let i = 100; i <= 200; i++){
    if (i % 3 === 0) {
        console.log(`Числа від 100 до 200 кратні 3 ${i}`);
    }
}

//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

const getNum = 70;

for(let i = 1; i <= getNum; i++){
    if(getNum % i === 0){
        console.log(`дільники числа 70: ${i}`);
    }   
}

//Визначити кількість його парних дільників.

let number = 70;
let count1 = 0;

for (let i = 1; i <= number; i++) {
  if (number % i === 0 && i % 2 === 0) {
    count1++;
  }
}

console.log(`Кількість парних дільників числа ${number}: ${count1}`);

//Знайти суму його парних дільників.

let number1 = 70;
let sum4 = 0;

for (let i = 1; i <= number1; i++) {
    if (number1 % i === 0 && i % 2 === 0) {
      sum4 += i;
    }
}
  console.log(`Сума парних дільників числа ${number1}: ${sum4}`);

//   Надрукувати повну таблицю множення від 1 до 10.

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log(); 
  }
  