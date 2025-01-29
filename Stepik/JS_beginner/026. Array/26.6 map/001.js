// Метод map() создаёт новый массив для каждого элемента

let playerPositions = [
    { x: 10, y: 20 },
    { x: 20, y: 30 },
    { x: 30, y: 40}
];

// [ { x: 15, y: 30 }, { x: 25, y: 40 }, { x: 35, y: 50 } ]
let updatedPositions = playerPositions.map(
    pos => ({x: pos.x + 5, y: pos.y + 10})
);

console.log(updatedPositions);
