'use strict';

function callback(number) {
    console.log(number);
}

function handler(number, callback) {
    callback(number ** 2);
}

handler(4, callback);   // 16
