const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
});

function isPalindrome(str) {
    let strReverse = '';

    for (let i = str.length - 1; i >= 0; i--)
        strReverse += str[i];

    return str == strReverse;
}

rl.on('line', (input) => {
    console.log(isPalindrome(input));
    rl.close();
});
