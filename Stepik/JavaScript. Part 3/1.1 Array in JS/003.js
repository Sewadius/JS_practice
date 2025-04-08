'use strict';

const getLast = arr =>
    arr.length ? arr.pop() : -1;

console.log(getLast([1, 4, 76, 3, 2]));     // 2
console.log(getLast([]));                   // -1
