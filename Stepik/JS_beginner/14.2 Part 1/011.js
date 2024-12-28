const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result = '';
    let data = JSON.parse(input);

    // -- ваш код начинается тут
    let movies = [];

    for (const film of data.movies)
        if (film.rating > 8)
            movies.push(film.title);

    for (let i = 0; i < movies.length; i++)
        result += movies[i] + ', ';

    result = result.slice(0, -2);
    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
