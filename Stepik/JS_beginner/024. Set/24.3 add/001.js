// Метод add()

let items = new Set();

// Добавление первого элемента
items.add('дерево');

// Добавление 3-х элементов цепочкой вызовов
items.add('камень').add('золото').add('серебро');

console.log(items);        // Set(4) { 'дерево', 'камень', 'золото', 'серебро' }
console.log(items.size);   // 4
