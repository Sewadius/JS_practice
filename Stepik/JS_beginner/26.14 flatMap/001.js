// Метод flatMap() применяет функцию к каждому элементу

const players = [
    {
      name: "Майк",
      stats: {
        level: 10,
        health: 100,
        attack: 20
      },
      inventory: ["Меч", "Зелье", "Щит"]
    },
    {
      name: "Одиннадцать",
      stats: {
        level: 15,
        health: 150,
        attack: 30
      },
      inventory: ["Палочка", "Свиток", "Эликсир"]
    }
];

// Формирует плоскую структуру и помещает в новый массив
const inventory = players.flatMap(
    player => player.inventory
);

// [ 'Меч', 'Зелье', 'Щит', 'Палочка', 'Свиток', 'Эликсир' ]
console.log(inventory);
