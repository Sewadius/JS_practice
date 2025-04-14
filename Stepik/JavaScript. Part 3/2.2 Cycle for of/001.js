'use strict';

const sumTo = (n) => {
    const arr = [];

    for (let i = 0; i <= n; i++)
        arr.push(i);

    let sum = 0;

    for (const value of arr) sum += value;

    return sum;
};

console.log(sumTo(5));  // 15
