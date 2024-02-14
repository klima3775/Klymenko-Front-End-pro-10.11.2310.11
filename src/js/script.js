import categories from "./categories.js";
import images from "./images.js";

document.addEventListener("DOMContentLoaded", function () {
  const categoryList = document.getElementById("category-list");
  const productsList = document.getElementById("products-list");
  const productDescription = document.getElementById("product-description");
  const productImage = document.getElementById("product-image");
  const buyButton = document.getElementById("buy-button");
  const watchOrdersButton = document.getElementById("watch-orders");
  const ordersList = document.getElementById("orders");
  const popUp = document.querySelector(".pop_up"); // Переміщено сюди
  const closePopUp = document.getElementById("close_pop_up");

  // Отримання списку замовлень з localStorage або створення порожнього списку
  const orders = getOrdersFromLocalStorage();

  Object.keys(categories).forEach((category) => {
    const listItem = document.createElement("li");
    listItem.textContent = category;
    listItem.addEventListener("click", () =>
      selectCategory(listItem, categories[category])
    );
    categoryList.appendChild(listItem);
  });

  watchOrdersButton.addEventListener("click", showOrders);

  // Вибір категорії
  function selectCategory(item, products) {
    clearSelectedItems(categoryList);
    item.classList.add("selected");
    renderProductsList(products);
  }
  // Очищення вибраних елементів
  function clearSelectedItems(list) {
    Array.from(list.children).forEach((item) => {
      item.classList.remove("selected");
    });
  }
  // Відображення списку продуктів
  function renderProductsList(products) {
    productsList.innerHTML = "";
    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.innerHTML = `<div class="product" data-image="${
        images[product.name]
      }" data-price="${product.price}">${product.name}</div>`;
      productDiv.addEventListener("click", () =>
        selectProduct(productDiv, product)
      );
      productsList.appendChild(productDiv);
    });
    document.getElementById("products").style.display = "block";
    document.getElementById("categories").style.display = "none";
  }

  // Вибір продукту
  function selectProduct(item, product) {
    clearSelectedItems(productsList);
    item.classList.add("selected");
    productImage.src = images[product.name];
    productDescription.textContent = `Це ${product.name} з категорії ${
      categoryList.querySelector(".selected").textContent
    }. Ціна: ${product.price}`;
    buyButton.disabled = false;
    productImage.style.display = "block";
  }
  // Купівля продукту
  buyButton.addEventListener("click", () => {
    const selectedCategory =
      categoryList.querySelector(".selected").textContent;
    const selectedProduct = productsList.querySelector(".selected");
    const order = {
      date: new Date().toLocaleString(),
      price: selectedProduct.dataset.price,
      details: `Категорія: ${selectedCategory}, Товар: ${selectedProduct.textContent}, Ціна: ${selectedProduct.dataset.price}`,
    };

    orders.push(order); // Додаємо замовлення до списку замовлень
    localStorage.setItem("orders", JSON.stringify(orders));
    popUp.classList.add("active"); // Показуємо вспливаюче вікно після покупки
    closePopUp.addEventListener("click", () => {
      popUp.classList.remove("active");
      window.location.reload();
    });
  });

  function showOrders() {
    ordersList.innerHTML = "";
    if (orders.length === 0) {
      ordersList.innerHTML = "<p>У вас не має замовлень</p>";
    } else {
      orders.forEach((order, index) => {
        const orderItem = document.createElement("li");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Видалити";
        deleteButton.addEventListener("click", () => deleteOrder(index));
        orderItem.textContent = `Замовлення ${index + 1}: ${
          order.details
        }, Дата: ${order.date}`;
        orderItem.appendChild(deleteButton);
        ordersList.appendChild(orderItem);
      });
    }
    document.getElementById("orders").style.display = "block";
    document.getElementById("categories").style.display = "none";
    document.getElementById("products").style.display = "none";
    document.getElementById("product-info").style.display = "none";
  }

  function deleteOrder(index) {
    orders.splice(index, 1); // Видаляємо замовлення зі списку
    localStorage.setItem("orders", JSON.stringify(orders));
    showOrders();
  }

  // Функція для отримання списку замовлень з localStorage
  function getOrdersFromLocalStorage() {
    return JSON.parse(localStorage.getItem("orders")) || [];
  }
});
