'use strict';

const num = 7;

const
    first = num > 0 && num % 2 != 0,
    second = num < 0 && num % 3 == 0;

if (first || second)
    console.log('YES');
else
    console.log('NO');
