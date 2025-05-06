'use strict';

const isAllEven = (...args) => {
    let isEven = true;

    for (const el of args) {
        if (el % 2 != 0) {
            isEven = false;
            break;
        }
    }

    return isEven;
};

console.log(isAllEven(12, 4, 6, 8));    // true
