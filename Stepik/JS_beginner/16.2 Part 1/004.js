const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// -- ваш код начинается тут

function factorial(n) {
    if (n == 1) return 1;
    return n * factorial(--n);
}

// -- ваш код заканчивается тут

rl.on('line', (input) => {
    let n = Number(input);
    console.log(factorial(n));
    rl.close();
});
