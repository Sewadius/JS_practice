'use strict';

const copyObject = obj => {
    return { ...obj };
};

// { "name": "Alice", "age": 30 }
console.log(copyObject(
    { "name": "Alice", "age": 30 }
));
