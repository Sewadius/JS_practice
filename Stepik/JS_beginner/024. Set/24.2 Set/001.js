// Конструктор Set()

let A = new Set([1, 2, 3]);
let B = new Set([4, 5]);
let C = new Set([...A, ...B])

console.log(A);                 // Set(3) { 1, 2, 3 }
console.log(typeof A);          // object
console.log(B);                 // Set(2) { 4, 5 }

// Количество уникальных элементов
console.log(C.size);            // 5
