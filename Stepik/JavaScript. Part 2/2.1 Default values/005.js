'use strict';

const userName = 'Tom';

function greet(name = 'Guest', timeOfDay = 'morning') {
    return `Good ${timeOfDay}, ${name}!`;
}

console.log(greet());
console.log(greet(userName));
