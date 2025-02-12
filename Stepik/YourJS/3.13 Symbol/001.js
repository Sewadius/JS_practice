// Symbol - символ
'use strict';

const sym1 = Symbol('hello');
console.log(sym1);              // Symbol(hello)

// Символы уникальны
const sym2 = Symbol('hello');
console.log(sym1 == sym2);      // false
