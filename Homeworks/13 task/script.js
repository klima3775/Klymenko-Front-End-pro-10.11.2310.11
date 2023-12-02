const array = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

//Знайти суму та кількість позитивних елементів.

const positiveNumbers = [];

for(let i = 0; i <= array.length; i++){
    if(array[i] > 0){
        positiveNumbers.push(array[i]);
    }
}

console.log(`"Позитивні елементи масиву: ${positiveNumbers}`);

const sumElements = positiveNumbers.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
},0);

console.log(`Сума позитивних елементів масиву:${sumElements}`);

//Знайти мінімальний елемент масиву та його порядковий номер.

let minElement = array[0];
    minIndexElement = 0;

for(let i = 1; i < array.length; i++){
    if(array[i] < minElement){
        minElement = array[i];
        minIndexElement = i;
    }
}

console.log(`Мінімальний елемент: ${minElement}`);
console.log(`Порядковий номер мінімального елемента: ${minIndexElement}`);

//Знайти максимальний елемент масиву та його порядковий номер.

let maxElement = array[0];
    maxIndexElement = 0;

for(let i = 1; i < array.length; i++){
    if(array[i] > maxElement){
        maxElement = array[i];
        maxIndexElement = i;
    }
}

console.log(`Максимальний елемент: ${maxElement}`);
console.log(`Порядковий номер максимального елемента: ${maxIndexElement}`);

//Визначити кількість негативних елементів.
let negativeElements = [];
    

for(let i = 0; i <= array.length; i++){
    if(array[i] < 0){
        negativeElements.push(array[i]);
    }
}

console.log(`"Негативні елементи масиву: ${negativeElements}`);

let NegativeCount = array.reduce(function(accumulator, currentValue){
    if(currentValue < 0) {
        accumulator++;
    }
    return accumulator;
},0);

console.log(`Кількість негативних елементів: ${NegativeCount}`);

//Знайти кількість непарних позитивних елементів.

let OddpositiveNumbers = [];

for (let i = 0; i < positiveNumbers.length; i++) {
    if (positiveNumbers[i] > 0 && positiveNumbers[i] % 2 !== 0) {
        OddpositiveNumbers.push(positiveNumbers[i]);
    }
}

console.log(`Непарні позитивні елементи: ${OddpositiveNumbers.join(', ')}`);

let oddPositiveCount = 0;


for (let  i = 0; i < positiveNumbers.length; i++) {
   
    if (positiveNumbers[i] > 0 && positiveNumbers[i] % 2 !== 0) {
       
        oddPositiveCount++;
    }
}


console.log("Кількість непарних позитивних елементів:", oddPositiveCount);

//Знайти кількість парних позитивних елементів.

let evenPositiveElements = positiveNumbers.reduce(function(accumulator, currentValue){
    if(currentValue > 0 && currentValue % 2 === 0) {
        accumulator++;
    }
    return accumulator;
},0)
console.log("Кількість парних позитивних елементів:", evenPositiveElements);


//Знайти суму парних позитивних елементів.

let sumEvenPositive = positiveNumbers.reduce(function(accumulator, currentValue){
    if(currentValue > 0 && currentValue % 2 === 0){
        accumulator += currentValue;
    }
    return accumulator;
},0);

console.log("Сума парних позитивних елементів:", sumEvenPositive);

//Знайти суму непарних позитивних елементів.

let sumOddPositive = positiveNumbers.reduce(function(accumulator, currentValue){
    if(currentValue > 0 && currentValue % 2 === 0){
        accumulator += currentValue;
    }
    return accumulator;
},0);

console.log("Сума парних позитивних елементів:", sumEvenPositive);

//Знайти добуток позитивних елементів.а

let productPositive = array.reduce(function(accumulator,currentValue){
    if(currentValue > 0) {
        accumulator *= currentValue;
    }
    return accumulator;
},1);

console.log("Добуток позитивних елементів:", productPositive);

//Знайти найбільший серед елементів масиву, ост альні обнулити.

const maxValueOfArray = Math.max(...array);

for (let i = 0; i < array.length; i++) {
    if (array[i] !== maxValueOfArray) {
        array[i] = 0;
    }
}

console.log("Обнулений масив, крім найбільшого елементу:", array);