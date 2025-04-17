'use strict';

const max = (arr) => {
    let maximum = arr[0];

    for (const value of arr)
        if (value > maximum) maximum = value;

    return maximum;
};

console.log(max([1, 5, 3, 7, 2, 3]));   // 7
