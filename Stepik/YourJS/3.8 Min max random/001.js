// Максимальное и минимальное число
'use strict';

console.log(Math.max(2, 5, -4, 0));    // 5
console.log(Math.min(2, 5, -4, 0));    // -4

// Случайное число
console.log(Math.random());            // Случайное от 0 до 1 (не включая 1) 

// Целое число
console.log(Math.trunc(Math.random() * 10));    // Число от 0 до 9

// Случайное целое в диапазоне
const min = -50, max = 50;

// От -50 до 50 включительно
console.log(Math.floor(Math.random() * (max - min + 1) + min));
