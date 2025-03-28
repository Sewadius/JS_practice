'use strict';

const a = 8, b = 11;

function add(a = 0, b = 0) {
    return a + b;
}

console.log(add());         // 0
console.log(add(a, b));     // 19
