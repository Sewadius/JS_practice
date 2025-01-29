// Метод forEach() выполняет функцию для каждого элемента

const enemies = [
    { name: "Гоблин", x: 100, y: 50 },
    { name: "Скелет", x: 200, y: 100 },
    { name: "Орк", x: 300, y: 150 }
  ];

  enemies.forEach(enemy => {
    enemy.x += 10;
    enemy.y += 5;
  });

  console.log(enemies);
 
/*  [
        { name: 'Гоблин', x: 110, y: 55 },
        { name: 'Скелет', x: 210, y: 105 },
        { name: 'Орк', x: 310, y: 155 }
    ] */
