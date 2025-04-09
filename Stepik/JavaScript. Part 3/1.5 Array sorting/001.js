'use strict';

const numberSort = arr => {
    arr.sort((a, b) => a - b);
    return arr;
};

console.log(numberSort([1, 3, 2, 4, 11, 15]));
