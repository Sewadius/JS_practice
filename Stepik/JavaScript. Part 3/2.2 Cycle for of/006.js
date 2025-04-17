'use strict';

const copy = arr => {
    const newArr = [];

    for (const value of arr)
        newArr.push(value);

    return newArr;
};

console.log(copy([1, 2, 3, 4, 5]));
