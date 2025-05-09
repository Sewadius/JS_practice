'use strict';

function countProperties(obj) {
    let count = 0;

    for (const key in obj)
        count++;

    return count;
}

// 3 - количество свойств
console.log(countProperties(
    {"name":"Charlie","age":21,"major":"Computer Science"}
));
