
let firstNum = +prompt("Введіть перше число:");
let secondNum = +prompt("Введіть друге число:");

let sum = firstNum + secondNum;
let difference = firstNum - secondNum;
let multiplication = firstNum * secondNum;
let divisions = firstNum / secondNum;

alert(
    `Користувач ввів ${firstNum} і ${secondNum}\n` +
    `${firstNum} + ${secondNum} = ${sum}\n` +
    `${firstNum} - ${secondNum} = ${difference}\n` +
    `${firstNum} * ${secondNum} = ${multiplication}\n` +
    `${firstNum} / ${secondNum} = ${divisions}`
);
