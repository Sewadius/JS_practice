const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result = true;
    let data = JSON.parse(input);

    // -- ваш код начинается тут
    for (const el of data)
        if (!(el & 1)) result = false;

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
