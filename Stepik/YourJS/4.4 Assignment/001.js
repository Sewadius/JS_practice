// Присваивание
'use strict';

const num = 5;
let tmp = null;

// Оператор присваивания возвращает результат
const result = (tmp = num);
console.log(`result = ${result}`);
console.log(`tmp = ${tmp}`);

// Присваивание с операцией
let number = 5;
console.log(`number = ${number}`);
number += 2;
console.log(`number = ${number}`);
