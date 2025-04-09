'use strict';

const check = (arr, value, index) =>
    arr.indexOf(value) == index;

console.log(check([1, 2, 3, 4], 3, 2));     // true
