const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let [x1, x2, x3] = input.split(" ").map(Number);

    // -- ваш код начинается тут
    let maxNumber = (x1 >= x2 && x1 >= x3) ? x1 :
        (x2 >= x1 && x2 >= x3) ? x2 : x3;
    
    let minNumber = (x1 <= x2 && x1 <= x3) ? x1 :
        (x2 <= x1 && x2 <= x3) ? x2 : x3;

    result = `минимальное: ${minNumber}, максимальное: ${maxNumber}`;

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
