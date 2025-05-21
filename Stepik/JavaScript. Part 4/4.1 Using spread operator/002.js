'use strict';

function joinObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// { host: 'localhost', port: 9090, debug: true }
console.log(joinObjects(
    { "host": "localhost", "port": 8080 },
    { "debug": true, "port": 9090 }
));
