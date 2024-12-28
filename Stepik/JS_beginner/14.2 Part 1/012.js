const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result = '';
    let data = JSON.parse(input);

    // -- ваш код начинается тут
    let counter = 0;
    const RATING = 8;

    for (let i = 0; i < data.movies.length; i++)
        if (data.movies[i].rating > RATING)
            ++counter;


    result = counter;
    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
