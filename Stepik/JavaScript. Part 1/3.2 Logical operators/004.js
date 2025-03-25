'use strict';

const x = 0, y = 10;
let quater = -1;

if (x == 0 || y == 0)
    console.log('Точка лежит на одной из осей');
else if (x > 0 && y > 0)
    quater = 1;
else if (x < 0 && y > 0)
    quater = 2;
else if (x < 0 && y < 0)
    quater = 3;
else
    quater = 4;

if (quater != -1)
    console.log(quater);
