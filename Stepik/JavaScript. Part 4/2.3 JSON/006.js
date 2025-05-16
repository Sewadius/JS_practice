'use strict';

const convertToJsonWithMasking = (obj, arr) => {
    const jsonString = JSON.stringify(obj, (key, value) => {
        if (arr.includes(key))
            return "*****";
        return value;
    });

    return jsonString;
};

// {"name":"John","age":30,"password":"*****","email":"*****"}
console.log(convertToJsonWithMasking(
    { "name": "John", "age": 30, "password": "123456", "email": "john@example.com" },
    ["password", "email"]
));
