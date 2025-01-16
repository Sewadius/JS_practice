// Метод reduce() применяет функции к каждому элементу
// Возвращает: одно результирующее значение

let arr = [0, 1, 2, 3, 4];

let arr1 = arr.reduce(function(previous, current) {
    return previous + current;
});

console.log(arr1);  // 10

let arr2 = arr.reduce(function(previous, current) {
    return previous + current;
}, 10);

console.log(arr2);  // 20
