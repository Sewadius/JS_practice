'use strict';

const mergeObjects = (obj1, obj2) =>
    Object.assign({}, obj1, obj2);

// {"a":1,"b":2,"c":12,"d":22}
console.log(mergeObjects(
    {"a":1,"b":2},
    {"c":12,"d":22}
));
