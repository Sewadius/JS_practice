'use strict';

function hasProperty(obj, property) {
    for (const key in obj)
        if (key == property)
            return true;

    return false;
}

// true
console.log(hasProperty(
    {"name":"Charlie","age":21,"major":"Computer Science"},
    "age"
));
