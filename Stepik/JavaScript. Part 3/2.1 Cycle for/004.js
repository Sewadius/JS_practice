'use strict';

const range = (start, end, step) => {
    const arr = [];

    for (let i = start; i <= end; i += step)
        arr.push(i);

    return arr;
};

console.log(range(2, 10, 2));
