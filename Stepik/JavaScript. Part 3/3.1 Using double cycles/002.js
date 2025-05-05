'use strict';

function sumOfNumbers(arr) {
    let sum = 0;

    for (const value of arr)
        for (const i of value)
            sum += i;

    return sum;
}

// 18 - сумма элементов
console.log(sumOfNumbers([
    [1,2,3],
    [1,2,3],
    [1,2,3]
]));
