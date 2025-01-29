// Пример с массивом объектов

const enimies = [
    { name: 'Гоблин', health: 20 },
    { name: 'Орк', health: 50 },
    { name: 'Дракон', health: 100 },
];

const highHealthEnemies = enimies.filter(
    enemy => enemy.health > 50
);

// [ { name: 'Дракон', health: 100 } ]
console.log(highHealthEnemies);
