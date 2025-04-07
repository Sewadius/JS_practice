'use strict';

const
    callback_1 = n => console.log(`Число ${n} - четное`),
    callback_2 = n => console.log(`Число ${n} - нечетное`);

function handler(callback_1, callback_2, number) {
    number % 2 == 0 ?
        callback_1(number) : callback_2(number);
}

handler(callback_1, callback_2, 11);
