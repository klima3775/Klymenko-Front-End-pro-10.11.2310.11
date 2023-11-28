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

