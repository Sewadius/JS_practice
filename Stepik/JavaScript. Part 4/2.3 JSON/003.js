'use strict';

function convertToObject(jsonString) {
    return JSON.parse(jsonString);
}

// { name: 'John', age: 30, isStudent: false, courses: [ 'Math', 'Science' ] }
console.log(convertToObject(
    '{ "name": "John", "age": 30, "isStudent": false, "courses": ["Math", "Science"] }'
));
