function redirectToSite() {
  let inputUrl = document.getElementById("urlInput").value.trim();

  // Перевірка, чи введено http:// або https://
  if (inputUrl.startsWith("http://")) {
    inputUrl = "https://" + inputUrl.slice(7);
  } else if (!inputUrl.startsWith("https://")) {
    inputUrl = "https://" + inputUrl;
  }

  // Переадресація на інший сайт
  window.location.href = inputUrl;
}
