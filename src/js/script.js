document.getElementById("getWeatherBtn").addEventListener("click", function () {
  const cityInput = document.getElementById("cityInput");
  const city = cityInput.value.trim();

  if (city === "") {
    alert("Будь ласка, введіть назву міста.");
    return;
  }

  const apiKey = "5d066958a60d315387d9492393935c19";
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Не вдалося отримати дані про погоду");
      }
      return response.json();
    })
    .then((weatherData) => {
      displayWeather(weatherData);
    })
    .catch((error) => {
      console.error("Помилка отримання даних про погоду:", error);
    });
});

function displayWeather(data) {
  const weatherInfo = document.getElementById("weather-info");

  const temperature = data.main.temp;
  const pressure = data.main.pressure;
  const description = data.weather[0].description;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  const windDirection = data.wind.deg;
  const iconCode = data.weather[0].icon;

  const CreatedHtml = `
        <div id="weather-info">
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>Температура: ${temperature} &deg;C</p>
          <p>Тиск: ${pressure} hPa</p>
          <p>Опис: ${description}</p>
          <p>Вологість: ${humidity} %</p>
          <p>Швидкість вітру: ${windSpeed} м/с</p>
          <p>Напрям вітру: ${windDirection} &deg;</p>
          <img src="http://openweathermap.org/img/w/${iconCode}.png" alt="Погодний значок">
        </div>
      `;

  weatherInfo.innerHTML = CreatedHtml;
}
