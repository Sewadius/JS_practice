'use strict';

function incrementValues(obj) {
    for (const key in obj)
        obj[key]++;

    return obj;
}

// {"key_1":11,"key_2":21}
console.log(incrementValues(
    {"key_1":10,"key_2":20}
));
