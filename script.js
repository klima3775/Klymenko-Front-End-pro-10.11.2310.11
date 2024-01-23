//кількість стовпців та колонок
let rows = 10;
let columns = 10;

//створюємо таблицю
let table = document.createElement("table");

//числові дані які будуть записані в таблицю
let counter = 1;

//вкладені цикли для створення табшлиці
for (let i = 0; i < rows; i++) {
  let row = table.insertRow(i);

  for (let j = 0; j < columns; j++) {
    let cell = row.insertCell(j);
    cell.innerHTML = counter;
    counter++;
    //стилі для таблиці
    cell.style.border = "1px solid black";
    cell.style.padding = "8px";
  }
}

document.body.appendChild(table);
