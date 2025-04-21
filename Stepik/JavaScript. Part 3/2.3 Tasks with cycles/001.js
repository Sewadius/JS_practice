'use strict';

const findIndexEqualNumbers = arr => {
    const arrNew = [];

    for (let i = 0; i < arr.length; i++)
        i == arr[i] && arrNew.push(i);

    return arrNew;
};

// [0, 2, 4, 6]
console.log(findIndexEqualNumbers([0, -1, 2, -3, 4, -5, 6]));
