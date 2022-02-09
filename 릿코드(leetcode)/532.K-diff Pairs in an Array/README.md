# K-diff Pairs in an Array
nums 배열안에서 k 만큼 차이나는 숫자가 몇쌍인지 리턴하라.

## 문제 링크
https://leetcode.com/problems/k-diff-pairs-in-an-array/

## 나의 풀이
<a href='./test.js'>풀이.js</a>

### 예시
```
Input: nums = [3,1,4,1,5], k = 2
Output: 2
Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
Although we have two 1s in the input, we should only return the number of unique pairs.
```

```
Input: nums = [1,2,3,4,5], k = 1
Output: 4
Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
```

```
Input: nums = [1,3,1,5,4], k = 0
Output: 1
Explanation: There is one 0-diff pair in the array, (1, 1).
```

### 조건
* 1 <= nums.length <= 104
* -107 <= nums[i] <= 107
* 0 <= k <= 107