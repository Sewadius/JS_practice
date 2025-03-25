'use strict';

const a = 3, b = 3, c = 3;

const
    check_1 = a + b > c,
    check_2 = a + c > b,
    check_3 = b + c > a;

const isTriangle = check_1 && check_2 && check_3 &&
    a > 0 && b > 0 && c > 0;

if (isTriangle) {
    if (a == b && b == c)
        console.log('равносторонний');
    else if (a == b || a == c || b == c)
        console.log('равнобедренный');
    else
        console.log('разносторонний');
} else {
    console.log('треугольник с такими сторонами не существует');
}
