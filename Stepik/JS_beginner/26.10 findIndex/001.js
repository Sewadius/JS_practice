// Метод findIndex() возвращает индекс в массиве

const enemies = [
    { name: "Гоблин", x: 100, y: 50 },
    { name: "Скелет", x: 200, y: 100 },
    { name: "Орк", x: 300, y: 150 }
];

const index = enemies.findIndex(enemy => enemy.name == 'Скелет');
console.log(index);     // 1
