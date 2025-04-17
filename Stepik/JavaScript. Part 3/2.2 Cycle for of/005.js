'use strict';

const uniqueElements = arr => {
    const newArr = [];

    for (const value of arr)
        if (!newArr.includes(value))
            newArr.push(value);

    return newArr;
};

// [1, 2, 3, 4]
console.log(uniqueElements([1,1,1,2,2,2,3,3,3,4,4,4]));
