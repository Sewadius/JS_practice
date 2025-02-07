// Превращение числа в строку
'use strict';

const num = 52;
console.log(num);               // 52
console.log(num.toString());    // "52"

// В двоичной системе счисления
console.log(num.toString(2));   // "110100"

// В 16-ричной система счисления
console.log(num.toString(16));  // "34"

// Второй способ
console.log(num + '');          // "52"
console.log((52).toString());   // "52"
