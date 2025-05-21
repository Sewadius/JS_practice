'use strict';

const addProperty = (obj, key, value) => {
    const newObj = {};

    newObj[key] = value;

    return { ...obj, ...newObj };
};

// { name: 'Alice', age: 30 }
console.log(addProperty(
    { "name": "Alice" }, 'age', 30
));
