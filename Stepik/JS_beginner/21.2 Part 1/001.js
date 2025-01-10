const readline = require("readline");
const rl = readline.createInterface({ 
    input: process.stdin, output: process.stdout 
});

rl.on("line", (input) => {
    let userInput = () => JSON.parse(input);

    function countOdd(data) {
        let sum = 0;

        for (let i = 0; i < data.length; i++)
            if (data[i] & 1) sum += data[i];

        return sum;
    }

    console.log(countOdd(userInput()));

    rl.close();
});
