'use strict';

const numberSort = (arr, ascending) =>
    ascending ? arr.sort((a, b) => a - b) :
        arr.sort((a, b) => b - a);

console.log(numberSort([11, 4, 2, 5, 1, 3], true));
