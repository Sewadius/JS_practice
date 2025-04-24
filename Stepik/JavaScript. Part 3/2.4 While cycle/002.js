'use strict';

const sumEvenUpTo = number => {
    let total = 0;
    let evenNumber = 2;

    while (number >= evenNumber) {
        total += evenNumber;
        evenNumber += 2;
    }

    return total;
};

console.log(sumEvenUpTo(8));    // 20
