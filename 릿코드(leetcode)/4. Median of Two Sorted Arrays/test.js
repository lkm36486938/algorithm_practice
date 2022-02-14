/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let arr = nums1.concat(nums2).sort((a, b) => a - b);
  return arr.length % 2 == 1
    ? arr[Math.floor(arr.length / 2)]
    : (arr[Math.floor(arr.length / 2 - 1)] + arr[Math.floor(arr.length / 2)]) / 2;
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([3], [-2, -1]));
