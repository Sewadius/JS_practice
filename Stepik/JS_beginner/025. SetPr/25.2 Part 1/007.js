const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let [A, B] = input.split(" | ");

    A = new Set(JSON.parse(A));
    B = new Set(JSON.parse(B));

    // -- ваш код начинается тут
    result = new Set([...A, ...B]);

    // -- ваш код заканчивается тут

    console.log([...result].join(", "));
    rl.close();
});
