'use strict';

const convertValuesToString = obj => {
    for (const key in obj)
        obj[key] = String(obj[key]);

    return obj;
};

console.log(convertValuesToString(
    {"name":"Charlie","age":21,"major":"Computer Science"}
));
