'use strict';

const getValues = obj =>
    Object.values(obj);

// [1,2,12,22]
console.log(getValues(
    {"a":1,"b":2,"c":12,"d":22}
));
