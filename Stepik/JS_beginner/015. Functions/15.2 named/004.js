// Остаточные параметры, сумма
function sum(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++)
        result += args[i];
    return result;
}

console.log(sum(1, 0));             // 1
console.log(sum(4, 2, 3));          // 9
console.log(sum(2, 2, 3, 1));       // 8
console.log(sum(1, 1, 1, 1, 1));    // 5
