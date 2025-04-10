'use strict';

const stringSort = arr =>
    arr.sort((a, b) => a.length - b.length);

console.log(stringSort(['banana', 'apple', 'cherry', 'date']));

