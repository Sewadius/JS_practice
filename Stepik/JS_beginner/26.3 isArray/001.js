// Статический метод isArray()

const players = ['Майк', 'Дастин', 'Лукас'];
const enemies = [];
const points = [100];

const active = false;
const username = null;
const health = 100;
const myName = 'Лукас';
let score;

console.log(Array.isArray(players));    // true
console.log(Array.isArray(enemies));    // true
console.log(Array.isArray(points));     // true

console.log(Array.isArray(active));     // false
console.log(Array.isArray(username));   // false
console.log(Array.isArray(health));     // false
console.log(Array.isArray(myName));     // false
console.log(Array.isArray(score));      // false
