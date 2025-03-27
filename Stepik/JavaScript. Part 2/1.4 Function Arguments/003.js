'use strict';

const a = 5, b = 17, c = 15;

function compare(a, b, c) {
    console.log(a > b && a > c ? a : b > c ? b : c);
}

compare(a, b, c);
