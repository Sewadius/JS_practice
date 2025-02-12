// Boolean булев тип
'use strict';

const greaterThan = 5 > 3;
console.log(greaterThan);           // true

// Использование конструктора
console.log(5, Boolean(5));         // true
console.log(0, Boolean(0));         // false
console.log(NaN, Boolean(NaN));     // false
console.log(55n, Boolean(55n));     // true

console.log(null, Boolean(null));               // false
console.log(undefined, Boolean(undefined));     // false

// Строки
console.log('', Boolean(''));               // false
console.log('false', Boolean('false'));     // true
