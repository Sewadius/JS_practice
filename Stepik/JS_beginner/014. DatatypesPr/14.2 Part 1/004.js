const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let str = input;

    // -- ваш код начинается тут
    const LENGTH = 20;

    if (str.length > LENGTH) {
        str = str.slice(0, 17) + '...';
    }

    result = str;
    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
