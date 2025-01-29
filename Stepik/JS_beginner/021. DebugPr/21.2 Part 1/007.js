const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
});

function countWords(str) {
    let count = 1;

    for (let i = 1; i < str.length; i++)
        if (str[i] == ' ') ++count;

    return count;
}

rl.on('line', (input) => {
    console.log(countWords(input));
    rl.close();
});
