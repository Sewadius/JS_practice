const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let [x, y, direction] = input.split(" ");

    x = Number(x);
    y = Number(y);

    // -- ваш код начинается тут
    switch (direction) {
        case 'down': ++y; break;
        case 'up': --y; break;
        case 'left': --x; break;
        case 'right': ++x; break;
    }

    result = `x: ${x}, y: ${y}, direction: ${direction}`;

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
