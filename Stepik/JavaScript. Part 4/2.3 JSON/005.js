'use strict';

function convertToJsonWithFilter(obj, arr) {
    const jsonString = JSON.stringify(obj, (key, value) => {
        if (arr.includes(key))
            return undefined;
        return value;
    });

    return jsonString;
}

// {"name":"John","age":30}
console.log(convertToJsonWithFilter(
    { "name": "John", "age": 30, "password": "123456", "email": "john@example.com" },
    ["password", "email"]
));
