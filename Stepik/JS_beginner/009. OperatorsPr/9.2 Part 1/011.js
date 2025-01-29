const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let age = Number(input);

    // -- ваш код начинается тут
    result = age > 17 ? 'взрослый' : 'подросток';

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
