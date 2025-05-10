'use strict';

const cloneObject = obj =>
    Object.assign({}, obj);


// {"a":1,"b":2}
console.log(cloneObject(
    {"a":1,"b":2}
));
