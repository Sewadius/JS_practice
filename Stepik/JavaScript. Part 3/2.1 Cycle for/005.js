'use strict';

const range = (start, end, step, ascending) => {
    const arr = [];

    if (ascending)
        for (let i = start; i <= end; i += step)
            arr.push(i);
    else
        for (let i = end; i >= start; i -= step)
            arr.push(i);

    return arr;
};

console.log(range(2, 10, 2, false));
