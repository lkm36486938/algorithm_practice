/**
 * https://leetcode.com/problems/single-number/
 * 숫자배열 중 중복되는 값이 없는 수 구하기 (홀로있는 수)
 * XOR 연산 (비트연산)
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    return nums.reduce((sum, current) => (sum ^= current));
};


console.log(singleNumber([2,2,1])) // 1
console.log(singleNumber([4,1,2,1,2])) // 4
console.log(singleNumber([1])) // 1
