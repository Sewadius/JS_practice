const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result = "";
    let str = String(input);

    // -- ваш код начинается тут
    for (let i = 0; i < str.length; i++)
        result += '+';

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
