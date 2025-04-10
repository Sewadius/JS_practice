'use strict';

const sortLastDigit = arr =>
    arr.sort((a, b) => a % 10 - b % 10);

console.log(sortLastDigit([23, 45, 67, 11, 6]));
