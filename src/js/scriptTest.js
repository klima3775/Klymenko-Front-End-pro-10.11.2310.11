// fetch("https://api.novaposhta.ua/v2.0/json/Address/getWarehouses", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     apiKey: "your_api_key_here", // Замініть 'your_api_key_here' на ваш API ключ Нової Пошти
//   },
//   body: JSON.stringify({
//     apiKey: "your_api_key_here", // Замініть 'your_api_key_here' на ваш API ключ Нової Пошти
//     modelName: "AddressGeneral",
//     calledMethod: "getWarehouses",
//     methodProperties: {},
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     // Обробка отриманих даних
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Помилка отримання даних з сервера Нової Пошти:", error);
//   });
//Розібрати апі нової пошти і спробувати підключити якщо вийде
// scriptTest.js

// const form = document.getElementById("forms");

// form.addEventListener("submit", (e) => {
//   const nameInput = document.getElementById("name");
//   const city = document.getElementById("city");
//   const postOffices = document.getElementById("post-office");
//   const payment = document.getElementById("payment-method");
//   const quantity = document.getElementById("quantity");

//   if (
//     !nameInput.value.trim() ||
//     city === "" ||
//     !postOffices.value.trim() ||
//     payment === "" ||
//     quantity === ""
//   ) {
//     e.preventDefault();
//     alert("Будь ласка, заповніть всі обов'язкові поля");
//   }
// });
const form = document.getElementById("forms");

form.addEventListener("submit", (e) => {
  const nameInput = document.getElementById("name");
  const city = document.getElementById("city");
  const postOffices = document.getElementById("post-office");
  const payment = document.getElementById("payment-method");
  const quantity = document.getElementById("quantity");

  if (
    !nameInput.value.trim() ||
    city === "" ||
    postOffices.value.trim() === "" || // Видалення пробілів перед перевіркою на порожність
    payment === "" ||
    quantity === ""
  ) {
    e.preventDefault();
    alert("Будь ласка, заповніть всі обов'язкові поля");
  }
});
