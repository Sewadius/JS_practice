'use strict';

const rpad = arr => {
    if (arr.length < 5) arr.push(-1);
    return arr;
};

console.log(rpad([0]));
