'use strict';

function concatArrays(...args) {
    let result = [];

    for (const arr of args)
        result = [...result, ...arr];

    return result;
}

// [1,2,3,4,5,6]
console.log(concatArrays([1, 2, 3], [4, 5], [6]));
