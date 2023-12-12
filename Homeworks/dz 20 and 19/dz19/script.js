function createSum() {
  let totalSum = 0;

  function addSum(value) {
    totalSum += value;
    return totalSum;
  }

  return addSum;
}

const sumFunc = createSum();

const result1 = sumFunc(3);
const result2 = sumFunc(5);
const result3 = sumFunc(20);

console.log(result1);
console.log(result2);
console.log(result3);
