'use strict';

const sumArr = arr => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++)
        sum += arr[i];

    return sum;
};

console.log(sumArr([1, 2, 3, 4, 5]));
