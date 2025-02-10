// Превращение строки в число
'use strict';

const str = "52.86";
console.log(str);       // "52.86"

// Преобразование в число
console.log(+str);          // 52.86, унарный плюс
console.log(Number(str));   // 52.86, второй вариант

const str1 = "  -Infinity  ";
console.log(+str1);         // -Infinity

const str2 = "   22rub";
console.log(Number(str2));  // NaN
