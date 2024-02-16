document.addEventListener("DOMContentLoaded", function () {
  // Елементи та дані, з якими будемо працювати
  const categories = {
    Смартфони: [
      { name: "Poco", price: 5000 },
      { name: "Xiaomi", price: 6000 },
      { name: "Samsung", price: 15000 },
    ],
    Ноутбуки: [
      { name: "Hp", price: 20000 },
      { name: "Asus", price: 40000 },
      { name: "Acer", price: 27000 },
    ],
    Монітори: [
      { name: "Dell", price: 10000 },
      { name: "Lenovo", price: 8000 },
      { name: "MSI", price: 7000 },
    ],
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
  const productsList = document.getElementById("products-list");
  const productDescription = document.getElementById("product-description");
  const productImage = document.getElementById("product-image");
  const buyButton = document.getElementById("buy-button");
  const watchOrdersButton = document.getElementById("watch-orders");
  const ordersList = document.getElementById("orders");
  const orderInfoForm = document.getElementById("order-info");
  const popupForm = document.getElementById("popup-form");
  const form = document.getElementById("forms");

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
      const listItem = document.createElement("li");
      listItem.textContent = product.name;
      listItem.classList.add("product");
      listItem.dataset.image = images[product.name];
      listItem.dataset.price = product.price;
      listItem.addEventListener("click", () =>
        selectProduct(listItem, product)
      );
      productsList.appendChild(listItem);
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
  buyButton.addEventListener("click", (event) => {
    event.stopPropagation(); // Зупинити розповсюдження події, щоб не закривалася форма при натисканні на кнопку
    popupForm.style.display = "block";
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
  });

  popupForm.addEventListener("click", (event) => {
    event.stopPropagation(); // Зупинити подальше розповсюдження події
  });

  // Закрити форму, коли користувач клікає за межами форми або на кнопку "Закрити"
  document.addEventListener("click", () => {
    popupForm.style.display = "none";
    return;
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("name").value.trim();
    const city = document.getElementById("city").value.trim();
    const postOffices = document.getElementById("post-office").value.trim();
    const payment = document.getElementById("payment-method").value.trim();
    const quantity = document.getElementById("quantity").value.trim();

    if (!nameInput || !city || !postOffices || !payment || !quantity) {
      alert("Будь ласка, заповніть всі обов'язкові поля");
      return;
    }

    const comment = document.getElementById("comment").value.trim();

    const orderDetails = `
    <p><strong>ПІБ покупця:</strong> ${nameInput}</p>
    <p><strong>Місто:</strong> ${city}</p>
    <p><strong>Склад Нової пошти:</strong> ${postOffices}</p>
    <p><strong>Спосіб оплати:</strong> ${payment}</p>
    <p><strong>Кількість товару:</strong> ${quantity}</p>
    <p><strong>Коментар:</strong> ${comment}</p>
    <button id="checkInfo">ok</button>
  `;
    orderInfoForm.innerHTML = `
    <h2>Інформація про замовлення</h2>
    ${orderDetails}
  `;
    popupForm.style.display = "none";
    const closeInfo = document.getElementById("checkInfo");
    closeInfo.addEventListener("click", () => {
      orderInfoForm.style.display = "none";
      location.reload(); // Оновлюємо сторінку після натискання на кнопку "ok"
    });

    showOrderInfo();
  });

  function showOrderInfo() {
    orderInfoForm.style.display = "block";
    document.body.style.overflow = "hidden"; // Щоб заборонити прокручування сторінки під час відображення вспливаючого вікна
  }

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
