const testimonialsData = [
  { name: "Іван", text: "Дуже задоволений послугами! Рекомендую." },
  { name: "Марія", text: "Все чудово, швидко та професійно." },
  { name: "Петро", text: "Вражений якістю обслуговування." },
];

function TestimonialsReviews() {
  const testimonialsContainer = document.getElementById("testimonials");

  testimonialsData.forEach((testimonial) => {
    const testimonialDiv = document.createElement("div");
    testimonialDiv.classList.add("testimonial");

    const nameElement = document.createElement("h3");
    nameElement.textContent = testimonial.name;

    const textElement = document.createElement("p");
    textElement.textContent = testimonial.text;

    testimonialDiv.appendChild(nameElement);
    testimonialDiv.appendChild(textElement);

    testimonialsContainer.appendChild(testimonialDiv);
  });
}

TestimonialsReviews();
