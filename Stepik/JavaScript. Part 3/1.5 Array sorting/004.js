'use strict';

const sortLastLetter = arr => {
    return arr.sort((a, b) => {
        const lastA = a[a.length - 1];
        const lastB = b[b.length - 1];

        return lastA < lastB ? -1 :
            lastB < lastA ? 1 : 0;
    });
};

console.log(sortLastLetter(['banana', 'cherry', 'date']));
