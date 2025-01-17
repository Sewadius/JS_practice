const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result = '';
    let tags = JSON.parse(input);

    // -- ваш код начинается тут
    let unique = new Set(tags);

    const getCount = (elem) => {
        let counter = 0;

        for (const el of tags)
            if (elem == el) ++counter;

        return counter;
    };

    for (const el of tags) {
        if (unique.has(el)) { 
            unique.delete(el);
            result += `${el}: ${getCount(el)}, `
        }
    }

    result = result.slice(0, result.length - 2);

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
