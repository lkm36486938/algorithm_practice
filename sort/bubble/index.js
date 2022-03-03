function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let swap; // 교체 target 변수

    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swap = array[j];
        array[j] = array[j + 1];
        array[j + 1] = swap;
      }
      console.log(`${i}회전: ${array}`);
      console.log(`${i}swap: ${swap}`);
    }

    if (!swap) {
      break;
    }
  }
  return array;
}

console.log(bubbleSort([3, 4, 2, 1, 5]));
