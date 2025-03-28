'use strict';

const number = 12;

function isEven(number) {
    return !(number & 1);
}

console.log(isEven(number));
