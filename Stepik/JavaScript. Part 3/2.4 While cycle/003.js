'use strict';

const countDigits = number => {
    let totalDigits = 0;

    while (number > 0) {
        totalDigits++;
        number = Math.floor(number / 10);
    }

    return totalDigits;
}

console.log(countDigits(12345));    // 5
