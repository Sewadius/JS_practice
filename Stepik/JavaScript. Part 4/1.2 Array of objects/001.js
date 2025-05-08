'use strict';

function addStudent(arr, name, age, major) {
    const student = {
        "name": name,
        "age": age,
        "major": major
    };

    arr.push(student);
    return arr;
}

// { name: 'David', age: 24, major: 'Chemistry' }
console.log(addStudent(
    [
        {"name": "Alice", "age": 22, "major": "Mathematics"},
        {"name": "Bob", "age": 23, "major": "Physics"},
        {"name": "Charlie", "age": 21, "major": "Computer Science"}
    ],
    "David", 24, "Chemistry"
));
