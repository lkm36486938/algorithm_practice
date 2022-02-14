/**
 * https://leetcode.com/problems/reverse-integer/submissions/
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let isNegative = x.toString().includes('-');
  if (isNegative) x = Math.abs(x);
  let num = Number(x.toString().split('').reverse().join(''));

  if (Math.abs(num) > 2147483647) return 0; // 32비트 보다 큰 정수라면 0을 리턴
  if (isNegative) return Math.abs(num) * -1;
  else return num;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));