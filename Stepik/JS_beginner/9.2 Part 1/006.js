const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result, [x, op, y] = input.split(" ");
    x = Number(x);
    y = Number(y);

    // -- ваш код начинается тут
    result = op == '+' ? x + y : 
        op == '-' ? x - y : '';

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
