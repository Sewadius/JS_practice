'use strict';

function filterStudentsByMajor(arr, major) {
    const result = [];

    for (const student of arr)
        if (student.major == major)
            result.push(student);

    return result;
}

console.log(filterStudentsByMajor(
    [
        {"name":"Alice","age":22,"major":"Mathematics"},
        {"name":"Bob","age":23,"major":"Physics"},
        {"name":"Charlie","age":21,"major":"Computer Science"},
        {"name":"David","age":24,"major":"Mathematics"}
    ], "Mathematics"
));
