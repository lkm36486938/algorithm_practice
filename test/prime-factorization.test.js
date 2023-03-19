function primeFactorization(n) {
  let arr = [];

  if (n == 1) {
    arr.push(n);
    return arr;
  }

  let divideNum = 2;

  while (true) {
    if (n == 1) break;
    if (n % divideNum == 0) {
      arr.push(divideNum);
      n /= divideNum;
    } else {
      divideNum++;
    }
  }

  return arr.sort((a, b) => a - b);
}

test("primeFactorization", () => {
  expect(primeFactorization(1)).toStrictEqual([1]);
  expect(primeFactorization(2)).toStrictEqual([2]);
  expect(primeFactorization(3)).toStrictEqual([3]);
  expect(primeFactorization(4)).toStrictEqual([2, 2]);
  expect(primeFactorization(5)).toStrictEqual([5]);
  expect(primeFactorization(6)).toStrictEqual([2, 3]);
  expect(primeFactorization(7)).toStrictEqual([7]);
  expect(primeFactorization(8)).toStrictEqual([2, 2, 2]);
  expect(primeFactorization(2 * 2 * 3 * 3 * 11 * 7 * 5)).toStrictEqual([
    2, 2, 3, 3, 5, 7, 11,
  ]);
});
