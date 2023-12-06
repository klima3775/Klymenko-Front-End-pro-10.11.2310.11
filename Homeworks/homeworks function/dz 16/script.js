const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

const randomer = characters
  .split("")
  .sort(() => Math.random() - 0.5)
  .join("");

function newsKey(str, length) {
  if (length <= str.length) {
    return str.slice(0, length);
  }
}

const choiceLength = 25;

const key = newsKey(randomer, choiceLength);

if (key) {
  console.log("Набір із " + choiceLength + " випадкових символів:", key);
} else {
  console.log("Довжина ключа занадто велика");
}
