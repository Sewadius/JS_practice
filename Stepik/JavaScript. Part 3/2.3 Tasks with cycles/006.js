'use strict';

const findEqualAdjacentPairs = arr => {
    const newArr = [];

    for (let i = 0; i < arr.length - 1; i++)
        arr[i] == arr[i + 1] && newArr.push(arr[i]);

    return newArr;
};

// [3, 4, 1]
console.log(findEqualAdjacentPairs([1, 4, 3, 3, 5, 2, 4, 4, 1, 1, 23]));
