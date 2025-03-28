'use strict';

const userName = 'Tom';

function greet(name = 'Guest') {
    return `Hello ${name}`;
}

console.log(greet());
console.log(greet(userName));
