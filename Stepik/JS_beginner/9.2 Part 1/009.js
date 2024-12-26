const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let role = Number(input);

    // -- ваш код начинается тут
    result = ['admin', 'moderator', 'user'][--role];

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
