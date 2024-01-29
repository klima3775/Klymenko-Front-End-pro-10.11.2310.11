const categories = {
  Смартфони: ["Poco", "Xiaomi", "Samsung"],
  Ноутбуки: ["Hp", "Asus", "Acer"],
  Монітори: ["Dell", "Lenovo", "MSI"],
};

const categoryList = document.getElementById("category-list");
const buyButton = document.getElementById("buy-button");
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
  document.getElementById(
    "product-description"
  ).textContent = `Це ${product} з категорії ${selectedCategory}.`;
  buyButton.disabled = false;
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
}
