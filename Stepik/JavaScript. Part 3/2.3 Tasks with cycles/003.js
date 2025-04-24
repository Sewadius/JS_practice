'use strict';

function findNumbersGreaterThanNeighboursSum(arr) {
    const newArr = [];

    for (let i = 1; i < arr.length - 1; i++)
        arr[i] > arr[i - 1] + arr[i + 1] && newArr.push(arr[i]);

    return newArr;
}

// [4, 12]
console.log(findNumbersGreaterThanNeighboursSum([1, 4, 2, 12, 5]));
