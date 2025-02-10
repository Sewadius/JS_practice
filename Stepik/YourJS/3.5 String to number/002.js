// Преобразование в число с помощью функций
'use strict';

const str = ' 23.55  ';

// Преобразование в целое число
console.log(+str);                      // 23.55
console.log(Number.parseInt(str));      // 23

const str2 = '  23.2qqq34';
console.log(+str2);                     // NaN
console.log(Number.parseInt(str2));     // 23
console.log(Number.parseFloat(str2));   // 23.2
