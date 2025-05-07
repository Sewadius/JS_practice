'use strict';

function getValue(obj, key) {
    return obj[key] || -1;
}

// 'John'
console.log(getValue(
    {"name": "John", "age": 30, "occupation": "developer"}, 'name')
);
