const images = document.querySelectorAll("img");
const sliderItem = document.querySelector(".slider__item");
const sliderNext = document.querySelector(".slider-next");
const sliderBack = document.querySelector(".slider-back");

let count = 0;
let width;

// розрахунок розмірів слайдера
function init() {
  width = document.querySelector(".slider").offsetWidth;
  sliderItem.style.width = width * images.length + "px";
  images.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  scrollSlider();
  checkButton();
}

window.addEventListener("resize", init);
init();

// //слайдер вперед
sliderNext.addEventListener("click", function () {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  scrollSlider();
  checkButton();
});
//слайдер назад
sliderBack.addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  scrollSlider();
  checkButton();
});

//анімація слайдера
function scrollSlider() {
  sliderItem.style.transform = "translate(-" + count * width + "px)";
}

//перевірка кнопок
function checkButton() {
  sliderBack.style.visibility = count === 0 ? "hidden" : "visible";
  sliderNext.style.visibility =
    count === images.length - 1 ? "hidden" : "visible";
}
