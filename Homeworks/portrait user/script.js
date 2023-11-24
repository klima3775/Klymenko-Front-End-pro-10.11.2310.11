let year = +prompt("Ваш рік народження?:");
let city = prompt("В якому місті проживаєте?:");
let sport = prompt("Ваш улюблений вид спорту?:");

//Варіант отримання віку через конструктор та вбудовані методи

// let currentYear = new Date().getFullYear();
// let age = currentYear - year;

// Варіант простіше

let age = 2023 - year;
alert(`Ваш вік: ${age}`);


switch(city) {
    case "Київ":
        alert("Ти живеш у столиці України");
        break;
    case "Вашингтон":
        alert("Ти живеш у столиці США");
        break;   
    case "Лондон":
        alert("Ти живеш у столиці Великої Британії");
        break;
   
    default:
        alert(`Ти живеш у класному місті ${city}`);//трішки додав варіативності
}

switch(sport){
    case "Бокс":
        alert(`Твій  улублений спорт: ${sport} , хочеш бути як Усік?`);
        break;
    case "Футбол":
        alert(`Твій  улублений спорт: ${sport} , хочеш бути як Мессі?`);
        break;
    case "Баскетбол":
        alert(`Твій  улублений спорт: ${sport} , хочеш бути як Леброн?`);
        break;
    default:
        alert(`Твій улублений спорт: ${sport}`);
}
// Можу також все вивести 1 алертом, але тоді через функцію
