'use strict';

const updateMajor = (arr, nameStudent, major) => {
    for (const student of arr) 
        if (student.name == nameStudent)
            student.major = major;
    
    return arr;
};

console.log(updateMajor(
    [
        {"name": "Alice", "age": 22, "major": "Mathematics"},
        {"name": "Bob", "age": 23, "major": "Physics"},
        {"name": "Charlie", "age": 21, "major":"Computer Science"}
    ], "Bob", "Mathematics"
));
