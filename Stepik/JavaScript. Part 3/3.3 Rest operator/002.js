'use strict';

function findMax(...args) {
    let maxValue = args[0];

    for (const el of args)
        if (maxValue < el) maxValue = el;

    return maxValue;
}

// 23
console.log(findMax(1, 4, 23, 4, 7));
