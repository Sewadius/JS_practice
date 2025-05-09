'use strict';

const copyObject = obj => {
    const copy = {};

    for (const key in obj)
        copy[key] = obj[key];

    return copy;
};

console.log(copyObject(
    {"name":"Charlie","age":21,"major":"Computer Science"}
));
