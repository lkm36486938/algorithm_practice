/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  let map = {}, //Object to store count/frequency of numbers in array
    count = 0; //count the desired output/result

  //loop through the array and store the count/frequency in the object
  for (let i = 0; i < nums.length; i++) {
    /*if num appears for the 1st time them map[nums[i]] will be undefined
	and undefined||0 will result in 0 and 0+1 will store 1 as count of that number */
    map[nums[i]] = (map[nums[i]] || 0) + 1;
  }

  //   console.log(map); // { '1': 2, '3': 1, '4': 1, '5': 1 }

  //loop through keys.In this case keys will be unique as they have the frequency of their occurrences
  Object.keys(map).forEach((key) => {
    /* Now we need to check if target k is 0 or not 
		because in case k is 0 then only possible combination to get 
		difference 0 will be when same num appear twice i.e 
		1-1=0 ,here 1 count has to be 2 in map to get diff 0
		*/
    if (k !== 0) {
      /* 
			it is given that |a-b|=k
			so a=k+b i.e secondNum=k+key
			Since object stores key as string so we have to typecast it to integer
			and +k is shorthand of parseInt(k)
			so we can write  parseInt(k)+parseInt(key) as
			+k + +key (make sure there is space between +/add operator)
			*/

      // 문자열 앞에 '+' 를 붙이면 정수형으로 형변환됨
      let secondNum = k + +key;
      if (map[secondNum] !== undefined) {
        count++;
      }
    } else {
      /*So when k is 0 we check is num count is greater or equal
			 to 2 because then only we will get difference of these two as 0
			 */
      if (map[key] >= 2) count++;
    }
  });
  return count;
};

console.log(findPairs([3, 1, 4, 1, 5], 2)); // 2
console.log(findPairs([1, 2, 3, 4, 5], 1)); // 4
console.log(findPairs([1, 3, 1, 5, 4], 0)); // 1
console.log(findPairs([1, 1, 1, 1, 1], 0)); // 1
