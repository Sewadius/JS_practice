// Simple Fun #264: Compare Two Integers
const compareIntegers = (a, b) => {
    [a, b] = [a, b].map(el => BigInt(el));
    
    return a < b ? 'less' :
        a > b ? 'greater' : 'equal';
};

console.log(compareIntegers('12', '13'));       // less
console.log(compareIntegers('875', '799'));     // greater
console.log(compareIntegers('1000', '1000'));   // equal
console.log(compareIntegers('999', '1000'));    // less
console.log(compareIntegers('123', '122'));     // greater
