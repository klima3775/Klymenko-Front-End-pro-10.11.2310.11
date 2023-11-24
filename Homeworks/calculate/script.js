let answerActions = prompt("Виберіть операцію: add, sub, mult, div");
let answerOneNumber = +prompt("Введіть перше число:");
let answerTwoNumber = +prompt("Введіть друге число:");
let result;

    switch (answerActions) {
        case "add":
            alert(result = answerOneNumber + answerTwoNumber);
            break;
        case "sub":
            alert(result = answerOneNumber - answerTwoNumber);
            break;
        case "mult":
            alert(result = answerOneNumber * answerTwoNumber);
            break;
        case "div":
            alert(result = answerOneNumber / answerTwoNumber);
            break;
        default:
            alert("Будь ласка оберіть операцію");
    }