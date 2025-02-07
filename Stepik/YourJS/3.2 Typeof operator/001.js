// Оператор typeof
'use strict';

const data = 1;
console.log(typeof data);       // "number"

const str = '1';
console.log(typeof str);        // "string"

const obj = null;
console.log(typeof obj);        // "object"

const func = function() {};
console.log(typeof func);       // "function"

const bigNumber = -50n;
console.log(typeof bigNumber);  // "bigint"
