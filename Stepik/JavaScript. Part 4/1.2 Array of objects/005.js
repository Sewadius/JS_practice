'use strict';

const printStudentNames = arr => {
    for (const student of arr)
        console.log(student.name);
};

printStudentNames(
    [
        {"name":"Alice","age":22,"major":"Mathematics"},
        {"name":"Bob","age":23,"major":"Physics"},
        {"name":"Charlie","age":21,"major":"Computer Science"}
    ]
);
