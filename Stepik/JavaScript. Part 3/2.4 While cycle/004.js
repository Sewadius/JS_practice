'use strict';

function countdown(number) {
    const arr = [number];

    while (number--)
        arr.push(number);

    return arr;
}

console.log(countdown(8));  // [8, 7, 6, 5, 4, 3, 2, 1, 0]
