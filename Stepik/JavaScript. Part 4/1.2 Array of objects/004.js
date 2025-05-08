'use strict';

function removeStudentByName(arr, studentName) {
    const students = [];

    for (const student of arr)
        if (student.name != studentName)
            students.push(student);

    return students;
}

// Удаление студента по имени
console.log(removeStudentByName(
    [
        {"name":"Alice","age":22,"major":"Mathematics"},
        {"name":"Bob","age":23,"major":"Physics"},
        {"name":"Charlie","age":21,"major":"Computer Science"}
    ], "Bob"
));
