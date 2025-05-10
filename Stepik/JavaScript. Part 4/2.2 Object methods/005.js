'use strict';

const getEntries = obj =>
    Object.entries(obj);

// [["a",1],["b",2],["c",12],["d",22]]
console.log(getEntries(
    {"a":1,"b":2,"c":12,"d":22}
));
