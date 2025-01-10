const readline = require("readline");
const rl = readline.createInterface({ 
    input: process.stdin, output: process.stdout 
});

rl.on("line", (input) => {
    let userInput = () => JSON.parse(input);

    function process(data) {
        for (let i = 0; i < data.length; i++)
            if (data[i] < 0) data[i] = 0;

        return data;
    }
    
    console.log(JSON.stringify(process(userInput())));

    rl.close();
});
