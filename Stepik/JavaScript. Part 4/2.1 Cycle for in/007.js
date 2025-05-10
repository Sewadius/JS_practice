'use strict';

function getObjectKeys(obj) {
    const keys = [];

    for (const key in obj)
        keys.push(key);

    return keys;
}

// ["name", "age", "major"]
console.log(getObjectKeys(
    {"name":"Charlie","age":21,"major":"Computer Science"}
));
