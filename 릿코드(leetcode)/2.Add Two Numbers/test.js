/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let add = false;
  let result = [];
  let maxLength = l1.length > l2.length ? l1.length : l2.length;

  for (let i = 0; i < maxLength; i++) {
    let sum = 0;

    if (add) {
      sum += 1;
      add = false;
    }

    if (l1[i] === undefined) l1[i] = 0;
    if (l2[i] === undefined) l2[i] = 0;

    sum += l1[i] + l2[i];

    if (sum >= 10) {
      add = true;
      sum = sum % 10;
    }

    result.push(sum);
  }

  if(add) result.push(1)

  return result;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
