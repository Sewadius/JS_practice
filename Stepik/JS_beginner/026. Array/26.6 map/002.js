// Метод map()

const enimies = [
    { name: 'Гоблин', health: 10 },
    { name: 'Скелет', health: 20 },
    { name: 'Орк', health: 30 }
];

// Массив с именами
const enemyNames = enimies.map(enemy => enemy.name);
console.log(enemyNames);    // [ 'Гоблин', 'Скелет', 'Орк' ]

// Массив с уровнем здоровья
const enemyHealth = enimies.map(enemy => enemy.health);
console.log(enemyHealth);   // [ 10, 20, 30 ]
