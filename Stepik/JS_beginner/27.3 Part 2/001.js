const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let [n, data] = input.split(" | ");

    n = Number(n);
    data = JSON.parse(data);

    // -- ваш код начинается тут
    result = data.map(el => el * n).join(', ');

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
