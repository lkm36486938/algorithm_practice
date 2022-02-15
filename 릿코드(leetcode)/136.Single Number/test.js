/**
 * https://leetcode.com/problems/single-number/
 * 숫자배열 중 중복되는 값이 없는 수 구하기 (홀로있는 수)
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let obj = {}

    nums.map(num => {
        if(obj[num] !== undefined) {
            obj[num]++
        } else {
            obj[num] = 1
        }
    })

    let result = 0;
    Object.keys(obj).map(key => {
        if(obj[key] === 1) {
            result = key
        }
    })
    return result;
};


console.log(singleNumber([2,2,1])) // 1
console.log(singleNumber([4,1,2,1,2])) // 4
console.log(singleNumber([1])) // 1
