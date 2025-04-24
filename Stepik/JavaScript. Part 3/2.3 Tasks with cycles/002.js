'use strict';

const findNumbersGreaterThanPrevious = function (arr) {
    const newArr = [];

    for (let i = 0; i < arr.length - 1; i++)
        arr[i] < arr[i + 1] && newArr.push(arr[i + 1]);

    return newArr;
}

// [5, 7, 7]
console.log(findNumbersGreaterThanPrevious([2, 5, 3, 7, 5, 4, 7]));
