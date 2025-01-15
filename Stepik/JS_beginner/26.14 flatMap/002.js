// Метод flatMap() применяет функцию к каждому элементу

const spellbooks = ["Заклинание", "Гадание"];
const scrolls = ["Огненный шар", "Удар молнии"];
const wands = ["Дуб", "Ива"];

const equipment = [spellbooks, scrolls, wands];

// [[ 'Заклинание', 'Гадание' ],[ 'Огненный шар', 'Удар молнии' ],[ 'Дуб', 'Ива' ]]
console.log(equipment);

const newEquip = equipment.flatMap(
    type => type.map(
        name => `${name} - ${type[0].charAt(0)}`
    )
);

console.log(newEquip);

/*
    ['Заклинание - З',
    'Гадание - З',
    'Огненный шар - О',
    'Удар молнии - О',
    'Дуб - Д',
    'Ива - Д']
*/
