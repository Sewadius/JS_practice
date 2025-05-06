'use strict';

function skipElements(arr, result = -1) {
    if (arr.length < 3) return result;

    const [,,third] = arr;
    return third;
}

console.log(skipElements([1, 2]));                  // -1
console.log(skipElements([9, 8, 7, 6, 5, 4, 8]));   // 7
