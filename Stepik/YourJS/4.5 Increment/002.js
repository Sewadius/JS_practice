// Разница в префикс и постфикс инкремент
'use strict';

let num1 = 5;
const prefix = ++num1;

console.log('num1 = ', num1);       // 6
console.log(`prefix = ${prefix}`);  // 6

let num2 = 5;
const postfix = num2++;

console.log('num2 = ', num2);       // 6
console.log('postfix = ', postfix); // 5
