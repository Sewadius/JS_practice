'use strict';

const removeFields = obj => {
    const { is_active: active, ...rest } = obj;
    return rest;
};

// { name: 'Alice', age: 25 }
console.log(removeFields(
    { "name": "Alice", "age": 25, "is_active": true }
));
