// Метод sort(), сортировка чисел

let nums = [2, 3, 1, 4, 5];

// По возрастанию
console.log(nums.sort((a, b) => a - b));    // [ 1, 2, 3, 4, 5 ]

// По убыванию
console.log(nums.sort((a, b) => b - a));    // [ 5, 4, 3, 2, 1 ]
