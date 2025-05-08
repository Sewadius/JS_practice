'use strict';

function findStudentByName(arr, studentName) {
    let studentFound = {};

    for (const obj of arr) {
        if (obj.name == studentName) {
            studentFound = obj; break;
        }
    }

    return studentFound;
}

// {"name":"Charlie","age":21,"major":"Computer Science"}
console.log(findStudentByName(
    [
        {"name":"Alice","age":22,"major":"Mathematics"},
        {"name":"Bob","age":23,"major":"Physics"},
        {"name":"Charlie","age":21,"major":"Computer Science"}
    ], "Charlie"
));
