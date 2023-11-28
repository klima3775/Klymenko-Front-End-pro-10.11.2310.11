let year = +prompt("Ваш рік народження?:");
let city = prompt("В якому місті проживаєте?:");
let sport = prompt("Ваш улюблений вид спорту?:");

//Варіант отримання віку через конструктор та вбудовані методи

// let currentYear = new Date().getFullYear();
// let age = currentYear - year;

// Варіант простіше

let age = 2023 - year;



let ChoiceCity;

      switch(city) {
    case "Київ":
        ChoiceCity = "Ти живеш у столиці України";
        break;
    case "Вашингтон":
        ChoiceCity = "Ти живеш у столиці США";
        break;   
    case "Лондон":
        ChoiceCity = "Ти живеш у столиці Великої Британії";
        break;
   
    default:
        ChoiceCity =  `Ти живеш у класному місті ${city}`;//трішки додав варіативності
}


let ChoiceSports;

switch(sport){
    case "Бокс":
        ChoiceSports =  `Твій  улублений спорт: ${sport} , хочеш бути як Усік?`;
        break;
    case "Футбол":
        ChoiceSports =`Твій  улублений спорт: ${sport} , хочеш бути як Мессі?`;
        break;
    case "Баскетбол":
        ChoiceSports = `Твій  улублений спорт: ${sport} , хочеш бути як Леброн?`;
        break;
    default:
        ChoiceSports = `Твій улублений спорт: ${sport}`;
}

alert(`Ваш вік: ${age}\n${ChoiceCity}\n${ChoiceSports}`);
