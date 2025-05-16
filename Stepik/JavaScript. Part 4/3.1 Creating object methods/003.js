'use strict';

function createPerson(age) {
    return {
        age,
        isAdult: () => age > 18
    };
}

console.log(createPerson(15).isAdult());
