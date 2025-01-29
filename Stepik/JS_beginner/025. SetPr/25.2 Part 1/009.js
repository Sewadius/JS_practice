const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    A = new Set(JSON.parse(input));

    // -- ваш код начинается тут
    A.forEach(el => {
        (el & 1) && A.delete(el);
    });

    result = A;
    
    // -- ваш код заканчивается тут

    console.log([...result].join(", "));
    rl.close();
});
