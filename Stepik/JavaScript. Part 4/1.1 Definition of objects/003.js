'use strict';

const setAge = obj => {
    obj.age ? obj.age += 10 : obj.age = 31;

    return obj;
};

// age = 40
console.log(setAge(
    { "name": "John", "age": 30, "occupation": "developer" })
);

// age = 31
console.log(setAge(
    { "name": "John", "occupation": "developer" })
);
