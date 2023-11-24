let oneNumber = +prompt("Введіть перше число:");
    twoNumber = +prompt("Введіть друге число:");
    threeNumber = +prompt("Введіть третє число:");

let result = (oneNumber + twoNumber + threeNumber) / 3;

alert(`Середнє арифметичне 3 чисел ${result.toFixed(2)}`)


//Якщо скорочувати до 2 чисел після коми 

// alert(`Середнє арифметичне 3 чисел ${result.toFixed(2)}`) 

//Якщо округляти до більшого числа 
// alert(`Середнє арифметичне 3 чисел ${Math.floor(result)}`) 
