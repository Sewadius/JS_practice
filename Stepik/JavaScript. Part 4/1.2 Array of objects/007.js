'use strict';

function countStudentsAboveAge(arr, minAge) {
    let counter = 0;

    for (const student of arr)
        if (minAge <= student.age) 
            counter++;

    return counter;
}

console.log(countStudentsAboveAge(
    [
        {"name":"Alice","age":22,"major":"Mathematics"},
        {"name":"Bob","age":23,"major":"Physics"},
        {"name":"Charlie","age":21,"major":"Computer Science"}
    ], 22
));
