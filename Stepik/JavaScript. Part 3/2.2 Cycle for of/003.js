'use strict';

const avg = (arr) => {
    let avg = 0;

    for (const value of arr) avg += value;

    return avg / arr.length;
};

console.log(avg([1, 2, 3, 4, 5]));
