const readline = require("readline");
const rl = readline.createInterface({ 
    input: process.stdin, output: process.stdout 
});

rl.on("line", (input) => {
    let [a, b, c] = input.split(" ").map(Number)

    function process(x1, x2, x3) {
        let maxNumber = minNumber = x1, numbers = [x2, x2, x3];
    
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > maxNumber) maxNumber = numbers[i];
            if (numbers[i] < minNumber) minNumber = numbers[i];
        }
    
        return minNumber + maxNumber;
    }
    
    console.log(process(a, b, c));
    rl.close();
});
