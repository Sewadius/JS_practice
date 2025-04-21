'use strict';

const removeAll = function (arr, number) {
    const arrNew = [];

    for (const value of arr)
        if (value != number) arrNew.push(value);

    return arrNew;
}

console.log(removeAll([1, 3, 4, 3, 7, 5, 3], 3));
