const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let str = input;

    // -- ваш код начинается тут

    let result = str;

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
