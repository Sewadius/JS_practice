// Infinity, Nan, превращение числа в строку
'use strict';

// Получение бесконечности
console.log(1e1000);        // Infinity
console.log(50 / 0);        // Infinity
console.log(50 / -0);       // -Infinity

// Проверка на конечность
const num1 = 50 / 2;
console.log(Number.isFinite(num1));     // true

const num2 = 50 / 0;
console.log(Number.isFinite(num2));     // false
