/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let sum = num.toString();
  while (sum >= 10) {
    sum = sum.toString().split('').reduce(add);
  }

  return sum;
};

const add = (prev, curr) => Number(prev) + Number(curr);

console.log(addDigits(38));
console.log(addDigits(0))
console.log(addDigits(199))
