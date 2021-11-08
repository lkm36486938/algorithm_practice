const array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for (let i = 1; i < array.length; i++) {
    let cur = array[i];
    let left = i - 1;

    while (left >= 0 && array[left] > cur) {
        array[left + 1] = array[left];
        left--;
    }

    array[left + 1] = cur;
}

console.log(array);
