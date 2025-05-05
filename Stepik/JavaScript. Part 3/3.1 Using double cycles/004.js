'use strict';

const longestInnerArray = arr => {
    let longestArray = [];
    let maxLength = 0;

    for (const inner of arr)
        if (maxLength < inner.length) {
            maxLength = inner.length;
            longestArray = inner;
        }

    return longestArray;
};

// [1,2,3,4] - самый длинный внутренний массив
console.log(longestInnerArray([
    [1,2,3],
    [1,2,3,4],
    [1,2,3]
]));
