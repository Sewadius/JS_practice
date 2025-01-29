const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let data = JSON.parse(input);

    // -- ваш код начинается тут
    data = new Set(data.sort((a, b) => a - b));
    result = Array.from(data).join(', ');

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
