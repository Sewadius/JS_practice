'use strict';

function shallowCopy(arr) {
    return [...arr];
}

// [1, 2, 3, 4, 5]
console.log(shallowCopy([1, 2, 3, 4, 5]));
