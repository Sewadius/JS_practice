// Метод trace()
// Вывод трассировки стека в консоль

function outerFunction() {
    middleFunction();
}

function middleFunction() {
    innerFunction();
}

function innerFunction() {
    console.trace('Трассировка стека:');
}

outerFunction();
