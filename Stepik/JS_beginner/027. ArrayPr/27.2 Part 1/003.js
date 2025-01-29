const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let [num, data] = input.split(" | ");

    num  = Number(num);
    data = JSON.parse(data);

    // -- ваш код начинается тут
    result = data.every(el => el > num);

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
