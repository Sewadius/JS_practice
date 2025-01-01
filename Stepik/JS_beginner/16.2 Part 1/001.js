const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateArea(width, height) {
    // -- ваш код начинается тут
    return width * height;

    // -- ваш код заканчивается тут
}

rl.on('line', (input) => {
    let [width, height] = input.split(" ").map(Number);
    console.log(calculateArea(width, height));
    rl.close();
});
