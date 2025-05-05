'use strict';

const flattenMatrix = arr => {
    const result = [];

    for (const inner of arr)
        for (const el of inner)
            result.push(el);

    return result;
};

// [1,2,3,4,5,6,7,8,9]
console.log(flattenMatrix([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]));
