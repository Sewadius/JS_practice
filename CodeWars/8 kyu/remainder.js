// Find the Remainder
function remainder(n, m) {
    if ((n == 0 && m > 0) || (m == 0 && n > 0))
        return NaN;
    return n > m ? n % m : m % n;
}

console.log(remainder(17, 5));      // 2
console.log(remainder(0, 0));       // NaN
