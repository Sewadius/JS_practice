'use strict';

let globalCounter = 4;

function incrementGlobalCounter() {
    globalCounter++;
}

incrementGlobalCounter();
console.log(globalCounter);
