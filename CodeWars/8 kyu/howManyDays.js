// Training JS #8: Conditional statement-switch

const howManydays = month => {
    switch (month) {
        case 4: case 6: case 9: case 11:
            return 30;
        case 2:
            return 28;
        default:
            return 31;
    }
};

console.log(howManydays(1));    // 31
console.log(howManydays(2));    // 28
console.log(howManydays(4));    // 30
