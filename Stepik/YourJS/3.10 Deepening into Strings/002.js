// Углубление в строки
'use strict';

// Длина строки
const str = 'Привет, друг!';
console.log(str.length);        // 13

// Получение символов из строки
console.log(str[0]);    // 'П'
console.log(str[2]);    // 'и'

// Последний символ
console.log(str[str.length - 1]);   // '!'
console.log(str.at(-1));            // '!'

console.log(str[50]);   // undefined

// Повторение строки
console.log(str.repeat(2));     // 'Привет, друг!Привет, друг!'
