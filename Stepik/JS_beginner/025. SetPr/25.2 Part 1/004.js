const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result = new Set();
    let [A, B] = input.split(" | ");

    A = new Set(JSON.parse(A));
    B = new Set(JSON.parse(B));

    // -- ваш код начинается тут
    for (const el of A)
        if (!B.has(el)) result.add(el);

    // -- ваш код заканчивается тут

    console.log([...result].join(", "));
    rl.close();
});
