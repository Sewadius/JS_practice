'use strict';

const range = number => {
    const arr = [];

    for (let i = 0; i <= number; i++)
        arr.push(i);

    return arr;
};

console.log(range(8));
