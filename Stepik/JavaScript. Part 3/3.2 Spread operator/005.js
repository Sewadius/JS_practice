'use strict';

const skipElements = arr => {
    const [,,third] = arr;
    return third;
};

// 3
console.log(skipElements([1, 2, 3, 4, 5]));
