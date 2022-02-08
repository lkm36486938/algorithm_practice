/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (isNaN(num) || num === 0) return 0;
  if (num < 10) return num;
  return num % 9 === 0 ? 9 : num % 9;
};

console.log(addDigits(38));
console.log(addDigits(0))
console.log(addDigits(199))
