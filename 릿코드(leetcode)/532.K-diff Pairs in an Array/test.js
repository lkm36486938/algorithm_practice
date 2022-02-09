/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
    let count = 0;
    if(k === 0) {
        let filtered = nums.filter((item, index) => nums.indexOf(item) !== index)
        let unique = new Set(filtered).size
        count += unique
    }

    let set = Array.from(new Set(nums)) // get unique

    for (let i = 0; i < set.length; i++) {
        for (let j = 0; j < set.length; j++) {
            if(j <= i) continue;
            if(Math.abs(set[i] - set[j]) === k) count++
        }
    }

    return count
};

console.log(findPairs([3,1,4,1,5], 2)) // 2
console.log(findPairs([1,2,3,4,5], 1)) // 4
console.log(findPairs([1,3,1,5,4], 0)) // 1
console.log(findPairs([1,1,1,1,1], 0)) // 1