/**
    Runtime 418 ms
    Memory 39.1 MB
 */

var twoSum = function (nums, target) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let curNum = nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (i !== j)
        if (curNum + nums[j] === target) {
          if (result.length === 0) result = [i, j];
        }
    }
  }

  return result;
};

console.log(twoSum([2, 7, 11, 15], 9));
