'use strict';

const sumDigits = number => {
    let sum = 0;

    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }

    return sum;
};

console.log(sumDigits(4352));   // 14
