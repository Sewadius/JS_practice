'use strict';

const setFirst = (arr, value) => {
    arr.unshift(value);
    return arr;
};

console.log(setFirst([1, 4, 5, 4, 6], 40));
