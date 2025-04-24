'use strict';

function findEvenSumWithIndex(arr) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++)
        (arr[i] + i) % 2 == 0 && newArr.push(arr[i]);

    return newArr;
}

// [0, 2, 3, 4]
console.log(findEvenSumWithIndex([0, 2, 2, 3, 4]));
