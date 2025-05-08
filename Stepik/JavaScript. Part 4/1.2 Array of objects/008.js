'use strict';

function getAvgStudentsAge(arr) {
    let totalAge = 0;

    for (const student of arr)
        totalAge += student.age;

    return totalAge / arr.length;
}

// 22 - средний возраст
console.log(getAvgStudentsAge(
    [
        {"name":"Alice","age":22,"major":"Mathematics"},
        {"name":"Bob","age":23,"major":"Physics"},
        {"name":"Charlie","age":21,"major":"Computer Science"}
    ]
));
