const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    A = new Set(JSON.parse(input));

    // -- ваш код начинается тут
    result = new Set();

    A.forEach(element => {
        (element & 1) && result.add(element);
    });

    // -- ваш код заканчивается тут

    console.log([...result].join(", "));
    rl.close();
});
