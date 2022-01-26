/**
    Runtime 104 ms
    Memory 40.4 MB
 */

const twoSum = function (nums, target) {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }
    comp[target - nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
