'use strict';

const price = 100;

function calculateTotal(price, tax = 0.1 * price) {
    return price + tax;
}

console.log(calculateTotal(100));   // 110
