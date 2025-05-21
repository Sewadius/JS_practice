'use strict';

const joinMultipleObjects = (...objs) => {
    let result = {};

    for (const obj of objs)
        result = { ...result, ...obj };

    return result;
};

// { a: 1, b: 3, c: 5, d: 6 }
console.log(joinMultipleObjects(
    { "a": 1, "b": 2 },
    { "b": 3, "c": 4 },
    { "c": 5, "d": 6 }
));
