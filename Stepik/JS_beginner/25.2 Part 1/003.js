const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let [A, e] = input.split(" | ");

    A = new Set(JSON.parse(A));
    e = Number(e);

    // -- ваш код начинается тут
    result = A.has(e);

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
