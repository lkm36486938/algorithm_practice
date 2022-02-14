/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if(!s) return 0;
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    let str = s[i];
    for (let j = 0; j < s.length; j++) {
      if (i >= j) continue;
      if (str.indexOf(s[j]) === -1) {
        str += s[j];
      } else {
        break;
      }
    }
    arr.push(str.length);
  }

  console.log(arr);
  return Math.max(...arr);
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("hello world"));
