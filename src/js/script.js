const emoji = ["😬", "🥶", "🙈", "🧠", "🤠"];
const votes = new Array(emoji.length).fill(0);

const divSmile = document.getElementById("container");

emoji.forEach(function (smile, index) {
  const smileElement = document.createElement("span");
  smileElement.className = "smile";
  smileElement.textContent = smile;

  smileElement.addEventListener("click", function () {
    handleSmileyClick(index);
  });

  divSmile.appendChild(smileElement);

  const count = document.createElement("span");
  count.textContent = "0";
  divSmile.appendChild(count);
});

function handleSmileyClick(index) {
  votes[index]++;
  updateVotes();
}

function updateVotes() {
  const countElements = document.querySelectorAll(".smile + span");
  countElements.forEach(function (count, index) {
    count.textContent = votes[index];
  });
}
