const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result = false;
    let data = JSON.parse(input);

    // -- ваш код начинается тут
    const mySet = new Set(data);
    mySet.has(true) && !mySet.has(false) && (result = true);

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
