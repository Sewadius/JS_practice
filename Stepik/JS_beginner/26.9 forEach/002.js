// Метод forEach()

const inventory = [
    { name: 'Меч', quantity: 5 },
    { name: 'Щит', quantity: 5 },
    { name: 'Зелье', quantity: 5 }
];

// Вывод всех наименований
inventory.forEach(item => {
    console.log(item.name);
});
