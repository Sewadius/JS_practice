'use strict';

const sumPairs = arr => {
    const newArr = [];

    for (let i = 0; i < arr.length - 1; i += 2)
        newArr.push(arr[i] + arr[i + 1]);

    return newArr;
};

// [5, 9 , 7]
console.log(sumPairs([1, 4, 3, 6, 2, 5, 4]));
