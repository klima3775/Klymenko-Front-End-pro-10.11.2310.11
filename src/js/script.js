function redirectToSite() {
  let inputUrl = document.getElementById("urlInput").value.trim();

  // Перевірка, чи введено http:// або https://
  if (!inputUrl.startsWith("http://") && !inputUrl.startsWith("https://")) {
    inputUrl = "https://" + inputUrl;
  }

  // Переадресація на інший сайт
  window.location.href = inputUrl;
}
