/**
 * https://leetcode.com/problems/combination-sum/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];
  candidates.sort((a, b) => a - b);

  function calculate(list, remain, start) {
    for (let i = start; i < candidates.length && candidates[i] <= remain; i++) {
      if (candidates[i] == remain) {
        result.push([...list, candidates[i]]);
      } else {
        calculate([...list, candidates[i]], remain - candidates[i], i);
      }
    }
  }

  calculate([], target, 0);
  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7)); // [[2,2,3],[7]]
console.log(combinationSum([2, 3, 5], 8)); // [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2, 3, 5], 10)); // [[2,2,2,2,2], [2,2,3,3], [2,3,5] [5,5]]
