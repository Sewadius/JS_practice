'use strict';

function sumUpTo(number) {
    let sumTotal = number;

    while (number--)
        sumTotal += number;

    return sumTotal;
}

console.log(sumUpTo(8));    // 36
