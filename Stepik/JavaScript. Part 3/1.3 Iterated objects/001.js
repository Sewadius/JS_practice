'use strict';

const printCharacters = str => {
    if (str.length) console.log(str[0]);
    if (str.length > 1) console.log(str[1]);
    if (str.length > 2) console.log(str[2]);
};

printCharacters('Hello');
