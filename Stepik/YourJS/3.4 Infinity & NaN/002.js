// Примеры использования NaN
'use strict';

const num = 50 / 'Привет';
console.log(num);                   // NaN
console.log(typeof NaN);            // "number"
console.log(NaN == NaN);            // false

// Проверка на NaN
console.log(Number.isNaN(num));     // true

const num2 = 50 / 0;
console.log(Number.isNaN(num2));    // false
console.log(typeof Infinity);       // number
console.log(Infinity == Infinity);  // true
