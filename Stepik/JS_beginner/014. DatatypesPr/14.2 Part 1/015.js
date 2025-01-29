const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let data = JSON.parse(input);

    // -- ваш код начинается тут
    const film = {
        "id": 11,
        "title": "The Green Mile",
        "release_year": 1999,
        "genre": "Drama",
        "rating": 9,    
    };

    data.movies.push(film);

    names = [];

    for (const movie of data.movies)
        names.push(movie.title);

    result = names.join(', ');
    
    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
