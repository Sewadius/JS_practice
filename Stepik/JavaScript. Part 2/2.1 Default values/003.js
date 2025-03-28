'use strict';

const day = 18, month = 6, year = 2008;

function formatDate(d = 1, m = 12, y = 2000) {
    return `${d}/${m}/${y}`;
}

console.log(formatDate());
console.log(formatDate(day, month, year));
