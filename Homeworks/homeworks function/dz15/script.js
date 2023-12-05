const array = [1, 2, 3, 4, 5, 6, 7];

const removeElement = (array, item) =>
  array.filter((element) => element !== item);

const newArray = removeElement(array, 6);

console.log(newArray);
