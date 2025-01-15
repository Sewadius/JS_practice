// Метод forEach()

const traps = [
    { type: 'шипы', delay: 1000 },
    { type: 'огонь', delay: 2000 },
    { type: 'яд', delay: 5000 },
];

function activateTrap(type) {
    console.log(`Активируем ловушку: ${type}.`);
}

// Активация ловушки с временной задержкой
traps.forEach(trap => {
    setTimeout(() => {
        activateTrap(trap.type);
    }, trap.delay);
});
