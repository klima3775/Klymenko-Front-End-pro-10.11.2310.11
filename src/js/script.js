const categories = {
  Смартфони: ["Poco", "Xiaomi", "Samsung"],
  Ноутбуки: ["Hp", "Asus", "Acer"],
  Монітори: ["Dell", "Lenovo", "MSI"],
};

const images = {
  Poco: "https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/m/2/m20_black__back_1_.jpg/w_600",
  Xiaomi:
    "https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/m/1/m19a_black_back_1__1.jpg/w_600",
  Samsung:
    "https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/s/m/sm-m346_galaxy_m34_5g_dark_blue_front_1_.jpg/w_600",
  Hp: "https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/1/2/12781499.jpg/w_600",
  Asus: "https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/e/6/e6775ec2a_346411_b.jpg/w_600",
  Acer: "https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/a/c/acer-aspire-5_a515-56-56g-56s-56t_fp-backlit_black_gallery_01_1_.jpg/w_600",
  Dell: "https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/s/2/s2421hn_cfp_00025rf095_gy.psd_fmt_pjpg_pscan_auto_scl_1_wid_3264_hei_2974_qlt_85_0_resmode_sharp2_op_usm_1.75_0.jpg/w_600",
  Lenovo:
    "https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/0/1/01_monitor_g24-20_front_highest_height_1_.jpg/w_600",
  MSI: "https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/1/0/1024g2412.jpg/w_600",
};

const categoryList = document.getElementById("category-list");
const buyButton = document.getElementById("buy-button");
const productImage = document.getElementById("product-image");
let selectedCategory = null;
let selectedProduct = null;

Object.keys(categories).forEach((category) => {
  const listItem = document.createElement("li");
  listItem.textContent = category;
  listItem.addEventListener("click", () => selectCategory(category));
  categoryList.appendChild(listItem);
});

function selectCategory(category) {
  selectedCategory = category;
  renderProductsList(categories[category]);
}

function renderProductsList(products) {
  const productList = document.getElementById("products-list");
  productList.innerHTML = "";

  products.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.textContent = product;
    listItem.classList.add("product");
    listItem.dataset.image = images[product]; // Додано атрибут data-image
    listItem.addEventListener("click", () => selectProduct(product));
    productList.appendChild(listItem);
  });

  document.getElementById("products").style.display = "block";
  document.getElementById("categories").style.display = "none";

  // Видаляємо обробник події з кнопки "Купити", якщо він вже доданий
  buyButton.removeEventListener("click", buyProduct);
  // Додаємо новий обробник події для кнопки "Купити"
  buyButton.addEventListener("click", buyProduct);
}

function selectProduct(product) {
  selectedProduct = product;
  productImage.src = images[product]; // Динамічно встановлюємо зображення
  document.getElementById(
    "product-description"
  ).textContent = `Це ${product} з категорії ${selectedCategory}.`;
  buyButton.disabled = false;

  // Показуємо зображення, коли обрано товар
  productImage.style.display = "block";
}

function buyProduct() {
  if (selectedCategory && selectedProduct) {
    alert("Товар куплено!");
    resetState();
  }
}

function resetState() {
  selectedCategory = null;
  selectedProduct = null;
  buyButton.disabled = true;
  document.getElementById("categories").style.display = "block";
  document.getElementById("products").style.display = "none";
  document.getElementById("product-info").style.display = "block";

  // Очищуємо вміст опису товару
  document.getElementById("product-description").textContent = "";
  // Очищуємо зображення товару
  productImage.src = "";
  // Ховаємо зображення, коли скидаємо стан
  productImage.style.display = "none";
}
