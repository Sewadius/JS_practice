'use strict';

const addIfNotExists = (arr, value) => {
    if (!arr.includes(value)) arr.push(value);
    return arr;
};

console.log(addIfNotExists([1, 2, 3], 4));
