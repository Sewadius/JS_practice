const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let str = input;
    let vowels = 0;
    let consonants = 0;

    str = str.toLowerCase();

    // -- ваш код начинается тут
    const VOWELS = 'ауоыэяюёие';

    for (let i = 0; i < str.length; i++)
        if (VOWELS.includes(str[i])) vowels++;

    consonants = str.length - vowels;

    result = `согласных: ${consonants}, гласных: ${vowels}`;
    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
