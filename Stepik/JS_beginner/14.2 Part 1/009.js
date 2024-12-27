const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let data = JSON.parse(input);

    let movies = [];
    data = data.movies;

    // -- ваш код начинается тут
    for (let i = 0; i < data.length; i++)
        movies.push(data[i].title);

    result = movies.join(', ');
    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
