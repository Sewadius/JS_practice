const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let data = JSON.parse(input);

    // -- ваш код начинается тут
    result = data.sort((a, b) => a - b).join(', ');

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
