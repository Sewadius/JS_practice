'use strict';

function countAll(arr, number) {
    let total = 0;

    for (const value of arr)
        if (value == number) total++;

    return total;
}

console.log(countAll([1, 2, 3, 44, 1, 4, 2, 1, 5, 78], 1));     // 3
