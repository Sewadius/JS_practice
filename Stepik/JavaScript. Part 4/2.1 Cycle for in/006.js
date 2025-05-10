'use strict';

const mergeObjects = (obj1, obj2) => {
    const newObj = {};

    for (const key in obj1)
        newObj[key] = obj1[key];

    for (const key in obj2)
        newObj[key] = obj2[key];

    return newObj;
};

console.log(mergeObjects(
    {"name":"Charlie","age":21},
    {"major":"Computer Science"}
));
