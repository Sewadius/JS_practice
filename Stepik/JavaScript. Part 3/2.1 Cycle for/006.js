'use strict';

const reverse = s => {
    let str = '';

    for (let i = s.length - 1; i >= 0; i--)
        str = `${str}${s[i]}`;

    return str;
};

console.log(reverse('hello'));
