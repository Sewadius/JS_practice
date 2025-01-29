const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let players = JSON.parse(input);

    // -- ваш код начинается тут
    const getIndex = () => {
        for (let i = 0; i < players.length; i++)
            if (players[i].name == 'Майк') return i;
    };

    result = getIndex();

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
