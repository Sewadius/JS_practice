'use strict';

const switchFirstAndLast = arr => {
    if (arr.length > 2) {
        const first = arr.shift();
        const last = arr.pop();

        arr.unshift(last);
        arr.push(first);
    }

    return arr;
};

console.log(switchFirstAndLast([1, 2, 3, 4, 5]));

