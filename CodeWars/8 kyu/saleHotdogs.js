// Training JS #7: if..else and ternary operator

const saleHotdogs = n => {
    const k = n < 5 ? 100 : n > 9 ? 90 : 95;
    return k * n;
};

console.log(saleHotdogs(1));    // 100
console.log(saleHotdogs(5));    // 475
console.log(saleHotdogs(10));   // 900
