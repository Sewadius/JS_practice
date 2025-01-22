// Who ate the cookie?

function cookie(x) {
    if (typeof x == 'number') 
        x = 'Monica';
    else 
        x = typeof x == 'string' ? 'Zach' : 'the dog';

    return `Who ate the last cookie? It was ${x}!`;
}

console.log(cookie('Ryan'));    // ...Ryan
console.log(cookie(26));        // ...Monica
console.log(cookie(2.3));       // ...Monica
console.log(cookie(true));      // ...dog
