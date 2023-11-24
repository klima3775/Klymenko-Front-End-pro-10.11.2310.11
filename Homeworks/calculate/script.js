let answerActions = prompt("Виберіть операцію: add, sub, mult, div");
let answerOneNumber = +prompt("Введіть перше число:");
let answerTwoNumber = +prompt("Введіть друге число:");
let result;

    switch (answerActions) {
        case "add":
            result = answerOneNumber + answerTwoNumber;
            alert(`${answerOneNumber} + ${answerTwoNumber} = ${result}`);
            break;
        case "sub":
            result = answerOneNumber - answerTwoNumber;
            alert(`${answerOneNumber} - ${answerTwoNumber} = ${result}`);
            break;
        case "mult":
            result = answerOneNumber * answerTwoNumber;
            alert(`${answerOneNumber} * ${answerTwoNumber} = ${result}`);
            break;
        case "div":
            result = answerOneNumber / answerTwoNumber;
            alert(`${answerOneNumber} / ${answerTwoNumber} = ${result}`);
            break;
        default:
            alert("Будь ласка оберіть операцію");
    }


