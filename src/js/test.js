document.addEventListener("DOMContentLoaded", function () {
  const buyButton = document.getElementById("buy-button");
  const formsDiv = document.querySelector(".forms");
  const form = document.getElementById("forms");
  const orderInfoDiv = document.getElementById("order-info");

  buyButton.addEventListener("click", function () {
    formsDiv.style.display = "block";
  });
  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const city = document.getElementById("city").value.trim();
    const postOffice = document.getElementById("post-office").value.trim();
    const paymentMethod = document
      .getElementById("payment-method")
      .value.trim();
    const quantity = document.getElementById("quantity").value.trim();

    if (
      name === "" ||
      city === "" ||
      postOffice === "" ||
      paymentMethod === "" ||
      quantity === ""
    ) {
      alert("Будь ласка, заповніть всі обов'язкові поля");
      return false;
    }
    return true;
  }

  function getFormValues() {
    return {
      name: document.getElementById("name").value,
      city: document.getElementById("city").value,
      postOffice: document.getElementById("post-office").value,
      paymentMethod: document.getElementById("payment-method").value,
      quantity: document.getElementById("quantity").value,
      comment: document.getElementById("comment").value,
    };
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    if (validateForm()) {
      const formData = getFormValues();

      orderInfoDiv.innerHTML = `
                        <h2>Order Information</h2>
                        <p><strong>Name:</strong> ${formData.name}</p>
                        <p><strong>City:</strong> ${formData.city}</p>
                        <p><strong>Post Office:</strong> ${formData.postOffice}</p>
                        <p><strong>Payment Method:</strong> ${formData.paymentMethod}</p>
                        <p><strong>Quantity:</strong> ${formData.quantity}</p>
                        <p><strong>Comment:</strong> ${formData.comment}</p>
                    `;
    }
  }

  form.addEventListener("submit", handleFormSubmission);
});
