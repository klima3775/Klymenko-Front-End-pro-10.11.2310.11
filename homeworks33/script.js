function getImage() {
  const random = Math.floor(Math.random() * 9) + 1;
  return '<img src=".\\images\\' + random + '.jpg" border="0" />';
}

document.getElementById("imageContainer").innerHTML = getImage();
