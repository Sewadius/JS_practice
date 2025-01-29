// Метод includes() определяет содержит ли массив элемент

const items = ['Зелье', 'Эликсир', 'Свиток', 'Жезл'];

const hasScroll = items.includes('Свиток');
const hasAmulet = items.includes('Амулет');

console.log(hasScroll);     // true
console.log(hasAmulet);     // false
