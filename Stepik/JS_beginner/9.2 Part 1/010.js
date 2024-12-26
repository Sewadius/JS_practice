const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let [item, data] = input.split(" | ").map(String);

    data = JSON.parse(data);

    // -- ваш код начинается тут
    result = item in data;

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
