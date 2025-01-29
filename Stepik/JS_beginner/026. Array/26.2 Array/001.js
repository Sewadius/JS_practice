// Конструктор Array()

const arr1 = new Array('вода', 'огонь');
const arr2 = Array('вода', 'огонь');
const arr3 = Array(2);

console.log(typeof arr1);   // object
console.log(arr1.length);   // 2
console.log(arr1);          // [ 'вода', 'огонь' ]

console.log(typeof arr2);   // object
console.log(arr2.length);   // 2
console.log(arr2);          // [ 'вода', 'огонь' ]

console.log(typeof arr3);   // object
console.log(arr3.length);   // 2
console.log(arr3);          // [ <2 empty items> ]
