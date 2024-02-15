const divBrowserInfo = document.getElementById("browserInfo");
const browserInfo = {
  name: navigator.userAgent,
  version: navigator.appVersion,

  platform: navigator.platform,
};
divBrowserInfo.innerHTML = `
<p>Назва браузеру: ${browserInfo.name}</p>
<p>Версія браузеру: ${browserInfo.version}</p>
<p>Платформа користувача: ${browserInfo.platform}</p>
`;

function getUrlParams() {
  const urlParams = new URLSearchParams(window.location.search);
  return Array.from(urlParams.keys());
}

// Функція для встановлення стану прапорців на основі параметрів URL
function setCheckboxState() {
  const urlParams = getUrlParams();
  urlParams.forEach((param) => {
    if (param === "iphone") {
      document.getElementById("iphoneCheckbox").checked = true;
    } else if (param === "samsung") {
      document.getElementById("samsungCheckbox").checked = true;
    } else if (param === "maizu") {
      document.getElementById("maizuCheckbox").checked = true;
    } else if (param === "asus") {
      document.getElementById("asusCheckbox").checked = true;
    }
  });
}

setCheckboxState();

function updateUrlParams() {
  const checkedParams = [];
  if (document.getElementById("iphoneCheckbox").checked) {
    checkedParams.push("iphone");
  }
  if (document.getElementById("samsungCheckbox").checked) {
    checkedParams.push("samsung");
  }
  if (document.getElementById("maizuCheckbox").checked) {
    checkedParams.push("maizu");
  }
  if (document.getElementById("asusCheckbox").checked) {
    checkedParams.push("asus");
  }
  const newUrlParams =
    checkedParams.length > 0 ? `devices=${checkedParams.join(",")}` : "";
  const baseUrl = window.location.href.split("?")[0];
  const newUrl = baseUrl + (newUrlParams ? `?${newUrlParams}` : "");
  window.history.replaceState({}, "", newUrl);
}

document
  .getElementById("iphoneCheckbox")
  .addEventListener("change", updateUrlParams);
document
  .getElementById("samsungCheckbox")
  .addEventListener("change", updateUrlParams);
document
  .getElementById("maizuCheckbox")
  .addEventListener("change", updateUrlParams);
document
  .getElementById("asusCheckbox")
  .addEventListener("change", updateUrlParams);
