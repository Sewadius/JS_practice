'use strict';

const convertToJsonWithoutPassword = obj => {
    const jsonString = JSON.stringify(obj, (key, value) => {
        return key == 'password' ? undefined : value;
    });

    return jsonString;
};

// {"name":"John","age":30,"isStudent":false}
console.log(convertToJsonWithoutPassword(
    { "name": "John", "age": 30, "password": "123456", "isStudent": false }
));
