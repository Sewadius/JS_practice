'use strict';

const sumOfStringLengths = function(arr) {
    let totalLength = 0;

    for (const value of arr)
        for (const el of value)
            totalLength += el.length;

    return totalLength;
};

// 16 - суммарная длина строк
console.log(sumOfStringLengths([
    ["hello", "world"],
    ["foo", "bar"]
]));
