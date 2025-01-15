// Метод find() возвращает значение первого найденного

const traps = [
    { type: "шипы", activated: false },
    { type: "огонь", activated: true },
    { type: "яд", activated: false }
];

const activatedTrap = traps.find(trap => trap.activated);
console.log(activatedTrap);     // { type: 'огонь', activated: true }
