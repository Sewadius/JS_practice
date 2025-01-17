// Статический метод assign()
// Копирование свойств из одного или нескольких объектов в другой

const player1 = { name: 'Макс', score: 10 };
const player2 = { name: 'Лукас', score: 20 };

const players = Object.assign(
    { player1: player1 },
    { player2: player2 },
);

console.log(players);

/*
{
  player1: { name: 'Макс', score: 10 },
  player2: { name: 'Лукас', score: 20 }
}
*/
