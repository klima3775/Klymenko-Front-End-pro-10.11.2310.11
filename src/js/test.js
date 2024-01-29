const categories = {
  electronics: ["Смартфон", "Ноутбук", "Телевізор"],
  clothing: ["Футболка", "Джинси", "Куртка"],
  books: ["Роман", "Детектив", "Наукова література"],
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
  buyButton.disabled = true;
}

function renderProductsList(products) {
  const productsList = document.getElementById("products-list");
  productsList.innerHTML = "";

  products.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.textContent = product;
    listItem.classList.add("product");
    listItem.onclick = () => selectProduct(product);
    productsList.appendChild(listItem);
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
  buyButton.disabled = true;
  document.getElementById("categories").style.display = "block";
  document.getElementById("products").style.display = "none";
  document.getElementById("product-info").style.display = "block";

  // Очищуємо вміст опису товару
  document.getElementById("product-description").textContent = "";
}
