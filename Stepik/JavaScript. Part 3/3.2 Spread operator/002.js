'use strict';

function mergeArrays(arr1, arr2) {
    const VALUE = 12;

    return [...arr1, VALUE, ...arr2];
}

// [1, 2, 3, 12, 4, 5, 6]
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
