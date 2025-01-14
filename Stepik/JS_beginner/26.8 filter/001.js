// Метод filter() создаёт новый массив с элементами после проверки

const enemies = [
    { name: "Гоблин", health: 10 },
    { name: "Скелет", health: 20 },
    { name: "Орк", health: 30 }
  ];

const lowHealthEnemies = enemies.filter(
    enemy => enemy.health < 20
);

console.log(lowHealthEnemies);  // [ { name: 'Гоблин', health: 10 } ]
