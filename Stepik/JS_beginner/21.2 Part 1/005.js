const readline = require("readline");
const rl = readline.createInterface({ 
    input: process.stdin, output: process.stdout 
});

rl.on("line", (input) => {
    const a = Number(input);

    function factorial(n) {
        if (n == 1) return 1;
        return n * factorial(n - 1);
    }
    
    console.log(factorial(a));
    rl.close();
});
