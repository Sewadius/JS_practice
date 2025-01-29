// Метод concat() возвращает новый массив

// Объединение двух массивов
let items1 = ['Зелье', 'Эликсир'];
let items2 = ['Свиток', 'Жезл'];

let allItems = items1.concat(items2);
console.log(allItems);      // [ 'Зелье', 'Эликсир', 'Свиток', 'Жезл' ]

// Объединение массива и одного элемента
let items = ['Зелье', 'Эликсир'];
let newItems = items.concat('Свиток');
console.log(newItems);      // [ 'Зелье', 'Эликсир', 'Свиток' ]
