const length = +prompt('Введіть довжину масиву:');

const arr = [];

//Заповнюємо масив єлементамми від користувача

for (let i = 0; i < length; i++) {
    const element = +prompt(`Введіть елемент масиву №${i + 1}:`);
    arr.push(element);
}

console.log('Початковий масив:', arr);

// Сортування масиву за зростанням
for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log('Відсортований масив:', arr);

arr.splice(1, 4);

console.log('Масив після видалення елементів з 2 по 4:', arr);