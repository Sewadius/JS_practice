const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result = 0;
    let n = Number(input);

    // -- ваш код начинается тут
    for (let i = 1; i <= n; i += 2)
        result += i;

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
