'use strict';

function handler(callback, a, b) {
    console.log(callback(a, b));
}

function callback(a, b) {
    return a + b;
}

handler(callback, 12, 4);
