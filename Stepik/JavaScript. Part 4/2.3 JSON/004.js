'use strict';

const convertToJsonWithIndent = (obj, spaces) => {
    return JSON.stringify(obj, null, spaces);
};

console.log(convertToJsonWithIndent(
    { "name": "John", "age": 30, "isStudent": false }, 4
));
