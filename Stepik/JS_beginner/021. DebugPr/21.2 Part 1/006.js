const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
});

function countSpace(str) {
    let count = 0;

    for (let i = 1; i < str.length - 1; i++)
        if (str[i] == ' ') ++count;

    return count;
}

rl.on('line', (input) => {
    console.log(countSpace(input));
    rl.close();
});
