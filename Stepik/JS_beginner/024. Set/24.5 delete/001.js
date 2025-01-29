// Метод delete(), удаление уникального элемента

let items = new Set();

// Добавление элементов
items.add('камень').add('золото').add('серебро');

// Удаление элементов из объекта items
console.log(items.delete('камень'));    // true
console.log(items.delete('дерево'));    // false

console.log(items);     // Set(2) { 'золото', 'серебро' }
