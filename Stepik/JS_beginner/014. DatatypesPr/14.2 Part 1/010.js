const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let data = JSON.parse(input);

    // -- ваш код начинается тут
    let movies = [];

    for (const film of data.movies)
        if (film.release_year > 1990)
            movies.push(film.title);

    result = movies.join(', ');
    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
