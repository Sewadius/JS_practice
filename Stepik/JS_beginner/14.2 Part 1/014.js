const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let data = JSON.parse(input);

    // -- ваш код начинается тут
    let count = 0;
    const GENRE = ['Drama', 'Crime'];

    for (const movie of data.movies)
        GENRE.includes(movie.genre) || ++count

    result = count;
    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
