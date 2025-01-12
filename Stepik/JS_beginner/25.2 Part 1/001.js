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
    A.add(e);
    result = A;

    // -- ваш код заканчивается тут

    console.log([...result].join(", "));
    rl.close();
});
