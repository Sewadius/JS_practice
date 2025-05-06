'use strict';

function createArray(...args) {
    const result = [];

    for (let i = args.length - 1; i >= 0; i--)
        result.push(args[i]);

    return result;
}

// [5, 23, 4, 1]
console.log(createArray(1, 4, 23, 5));
