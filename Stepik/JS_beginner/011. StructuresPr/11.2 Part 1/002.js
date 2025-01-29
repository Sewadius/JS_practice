const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let num = Number(input);

    // -- ваш код начинается тут
    result = num > 0 ? 'Число позитивное' :
        num < 0 ? 'Число негативное' : 'Число равно 0';

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
