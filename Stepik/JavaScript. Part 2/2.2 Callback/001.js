'use strict';

function helloWorld() {
    return 'Hello world!';
}

function handler(callback) {
    console.log(callback());
}

handler(helloWorld);
