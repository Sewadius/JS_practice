'use strict';

const uniqueValues = arr => {
    const result = [];

    for (const inner of arr)
        for (const el of inner)
            if (!result.includes(el))
                result.push(el);

    return result;
};

// [1,2,3,4,6,7,9]
console.log(uniqueValues([
    [1,2,3],
    [4,3,6],
    [7,4,9]
]));
