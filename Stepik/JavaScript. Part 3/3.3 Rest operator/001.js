'use strict';

const sumAll = (...args) => {
    let sum = 0;

    for (const el of args)
        sum += el;

    return sum;
};

console.log(sumAll(1, 2, 1));   // 4
