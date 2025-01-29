// Метод endsWith() позволяет определить заканчивается ли строка
// Возвращает true/false

const str = 'Этот метод является регистрозависимым.';

console.log(str.endsWith('.'));         // true
console.log(str.endsWith('!'));         // false
console.log(str.endsWith('д', 10));     // true
