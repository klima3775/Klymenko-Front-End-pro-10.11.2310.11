const images = document.querySelectorAll(".slider .slider__item img");
const sliderItem = document.querySelector(".slider__item");
let count = 0;
let width;

function init() {
  console.log("resize");
  width = document.querySelector(".slider").offsetWidth;
  sliderItem.style.width = width * images.length + "px";
  images.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  scrollSlider();
}

window.addEventListener("resize", init);
init();

document.querySelector(".slider-next").addEventListener("click", function () {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  scrollSlider();
});

function scrollSlider() {
  sliderItem.style.transform = "translate(-" + count * width + "px)";
}

document.querySelector(".slider-back").addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  scrollSlider();
});
