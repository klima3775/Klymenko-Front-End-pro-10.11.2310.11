const testimonialsReviews = [
  { name: "Іван", text: "Дуже задоволений послугами! Рекомендую." },
  { name: "Марія", text: "Все чудово, швидко та професійно." },
  { name: "Петро", text: "Вражений якістю обслуговування." },
];

function addReviews() {
  const testimonalContainer = document.getElementById("testimonials");

  testimonialsReviews.forEach((testimonial) => {
    const testimonialDiv = document.createElement("div");
    testimonialDiv.classList.add("testimonial");

    const nameElement = document.createElement("h4");
    nameElement.innerHTML = testimonial.name;

    const textElement = document.createElement("p");
    textElement.innerHTML = testimonial.text;

    testimonialDiv.appendChild(nameElement);
    testimonialDiv.appendChild(textElement);

    testimonalContainer.appendChild(testimonialDiv);
  });
}
addReviews();
