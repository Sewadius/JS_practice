'use strict';

function handler(n1, n2, callback) {
    callback(n1 - n2);
}

function callback(number) {
    console.log(number);
}

handler(10, 3, callback);   // 7
