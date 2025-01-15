// No zeros for heros

function noBoringZeros(n) {
    while (n % 10 == 0 && n != 0) n /= 10;
    return n;
}

console.log(noBoringZeros(12600));      // 126
console.log(noBoringZeros(0));          // 0
console.log(noBoringZeros(-1050));      // -105
