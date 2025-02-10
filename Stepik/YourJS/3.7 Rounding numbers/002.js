// Округление числа до 2-го знака после запятой
'use strict';

const num = 24.3456;

console.log(num);                           // 24.3456
console.log(num * 100);                     // 2434.56
console.log(Math.round(num * 100));         // 2435
console.log(Math.round(num * 100) / 100);   // 24.35

// С помощью функции
console.log(num.toFixed(2));                // "24.35" как строка
