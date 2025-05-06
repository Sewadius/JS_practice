'use strict';

const splitArray = arr => {
    const [first, second, ...other] = arr;
    return [[first, second], other];
};

console.log(splitArray([1, 2, 3, 4, 5, 6]));
