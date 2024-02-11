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
