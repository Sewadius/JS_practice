'use strict';

const change = (arr, toReplace, replacement) => {
    if (arr.includes(toReplace)) {
        const index = arr.indexOf(toReplace);
        arr[index] = replacement;
    }

    return arr;
};

console.log(change([1, 2, 3, 4], 3, 5));    // [1, 2, 5, 4]
