'use strict';

function convertToJson(obj) {
    return JSON.stringify(obj);
}

// {"name":"John","age":30,"isStudent":false,"courses":["Math","Science"]}
console.log(convertToJson(
    { "name": "John", "age": 30, "isStudent": false, "courses": ["Math", "Science"] }
));
