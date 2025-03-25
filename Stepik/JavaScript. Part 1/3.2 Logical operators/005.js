'use strict';

const a = 12, b = 6, c = 11;

const
    check_1 = a + b > c,
    check_2 = a + c > b,
    check_3 = b + c > a;

if (check_1 && check_2 && check_3)
    console.log('YES');
else
    console.log('NO');
