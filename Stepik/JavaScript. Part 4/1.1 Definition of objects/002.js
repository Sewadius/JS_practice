'use strict';

function getAge(obj) {
    if (obj.age == undefined)
        return -1;

    return obj.age;
}

console.log(getAge({'name': 'John'}));                  // -1
console.log(getAge({'name': 'John', 'age': 31}));       // 31
