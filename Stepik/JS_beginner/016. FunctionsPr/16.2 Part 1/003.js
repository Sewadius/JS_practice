const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// -- ваш код начинается тут

function titles(data) {
    let result = [];
    const movies = data.movies;

    for (const movie of movies)
        result.push(movie.title);

    return result.join(', ');
}  

// -- ваш код заканчивается тут

rl.on('line', (input) => {
    let data = JSON.parse(input);
    console.log(titles(data));
    rl.close();
});
