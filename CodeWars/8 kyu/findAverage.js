// Grasshopper - Array Mean
function findAverage(nums) {
    let sum = 0;
    for (const el of nums) sum += el;
    return sum / nums.length;
}

console.log(findAverage([1]))           // 1
console.log(findAverage([1, 3, 5, 7]))  // 4
