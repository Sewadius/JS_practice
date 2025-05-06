'use strict';

const average = (...args) => {
    let total = 0, sum = 0;

    for (const el of args) {
        sum += el;
        total++;
    }

    return sum / total;
};

console.log(average(1, 2, 3, 4, 5));    // 3
