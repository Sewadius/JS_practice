'use strict';

const mergeArrays = (arr1, arr2) =>
    [...arr1, ...arr2];

// [1,2,3,4,5,6]
console.log(mergeArrays([1,2,3], [4,5,6]));
