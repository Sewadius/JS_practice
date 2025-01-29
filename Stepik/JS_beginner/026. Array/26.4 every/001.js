// Метод every() проверяет элементы массива условию

const numbers = [2, 4, 6, 8, 10];
const allEven = numbers.every(num => !(num & 1));
console.log(allEven);       // true

const nums = [10, 20, 30, 40, 50];
const allGreater = nums.every(num => num > 5);
console.log(allGreater);    // true

const arr = [
    { name: "Лия", age: 21 }, 
    { name: "Макс", age: 19 }, 
    { name: "Майкл", age: 19 }
];

const allMatch = arr.every(person => person.age > 18 && person.name.length > 2);
console.log(allMatch);      // true
