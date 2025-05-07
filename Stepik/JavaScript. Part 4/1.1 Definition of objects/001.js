'use strict';

const createUser = (name, age, occupation) => {
    return {
        'name': name,
        'age': age,
        'occupation': occupation
    };
};

// { name: 'Tom', age: 31, occupation: 'developer' }
console.log(createUser('Tom', 31, 'developer'));
