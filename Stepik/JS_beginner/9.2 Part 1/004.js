const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let hours = Number(input);

    // -- ваш код начинается тут
    result = hours * 60 ** 2;

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
