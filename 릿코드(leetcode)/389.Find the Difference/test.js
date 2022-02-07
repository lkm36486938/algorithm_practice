/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let char = '';
  let sArr = s.split('').sort();
  let tArr = t.split('').sort();

  for (let i = 0; i < tArr.length; i++) {
    if (sArr[i] === undefined) {
      char = tArr[i];
      break;
    }

    if (sArr[i] !== tArr[i]) {
      char = tArr[i];
      console.log('here');
      break;
    }
  }

  return char;
};

console.log(findTheDifference('ae', 'aea'));
