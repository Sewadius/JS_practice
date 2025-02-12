// BigInt - большие числа
'use strict';

console.log(Number.MIN_SAFE_INTEGER);       // -9007199254740991
console.log(Number.MAX_SAFE_INTEGER);       //  9007199254740991

const num = 4654641216954651231231546121n;
console.log(num);

// Операция только с BigInt
console.log(num * 1232134n);
console.log(BigInt(123));       // 123n

// Дробная часть отбрасывается
console.log(5n / 2n);           // 2n
