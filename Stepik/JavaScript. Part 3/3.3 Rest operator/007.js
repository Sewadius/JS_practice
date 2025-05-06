'use strict';

function incrementValues(...args) {
    const increment = args[0];
    const result = [];

    for (let i = 1; i < args.length; i++)
        result.push(args[i] + increment);

    return result;
}

// [15,16,17,18]
console.log(incrementValues(3, 12, 13, 14, 15));
