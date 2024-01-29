const categories = {
  Смартфони: ["Poco", "Xiaomi", "Samsung"],
  Ноутбуки: ["Hp", "Asus", "Acer"],
  Монітори: ["Dell", "Lenovo", "MSI"],
};

const categoriesDiv = document.getElementById("category-list");
const buyButton = document.getElementById("buy-button");
let selectedCategory = null;
let selectedProduct = null;

Object.keys(categories).forEach((category) => {
  const listItem = document.createElement("li");
  listItem.textContent = category;
  listItem.addEventListener("click", () => selectedCategory(category));
  categoriesDiv.appendChild(listItem);
});

function selectCategory(category) {
  selectCategory = category;
  renderProductsList(categories[category]);
}

function renderProductsList(products) {
  const productList = document.getElementById("products-list");
  productList.innerHTML = "";

  products.forEach((product) => {
    const listenItem = document.createElement("li");
    listenItem.textContent = product;
    listenItem.classList.add("product");
    listenItem.addEventListener("click", selectProduct(product));
    productList.appendChild(listenItem);
  });
}
