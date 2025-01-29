const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result = '';
    let [arr1, arr2, arr3] = input.split(" | ").map(String);

    arr1 = JSON.parse(arr1);
    arr2 = JSON.parse(arr2);
    arr3 = JSON.parse(arr3);

    // -- ваш код начинается тут
    for (const data of [arr1, arr2, arr3]) {
        const str = data.join(', ');
        result += str + ', ';
    }

    result = result.slice(0, -2);
    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
