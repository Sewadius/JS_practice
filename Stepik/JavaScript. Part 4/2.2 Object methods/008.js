'use strict';

function hasKey(obj, key) {
    for (const k of Object.keys(obj))
        if (k == key)
            return true;

    return false;
}

// true
console.log(hasKey(
    { "a": 1, "b": 2, "c": 3 }, 'c'
));
