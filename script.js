let rows = 10;
let columns = 10;

let table = document.createElement("table");

let counter = 1;

for (let i = 0; i < rows; i++) {
  let row = table.insertRow(i);

  for (let j = 0; j < columns; j++) {
    let cell = row.insertCell(j);
    cell.innerHTML = counter;
    counter++;

    cell.style.border = "1px solid black";
    cell.style.padding = "8px";
  }
}

document.body.appendChild(table);
