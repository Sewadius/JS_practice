'use strict';

const objectToPairs = obj => {
    const result = [];

    for (const key in obj) {
        const pair = [];

        pair.push(key);
        pair.push(obj[key]);

        result.push(pair);
    }

    return result;
};

// [["name","Charlie"],["age",21],["major","Computer Science"]]
console.log(objectToPairs(
    {"name":"Charlie","age":21,"major":"Computer Science"}
));
