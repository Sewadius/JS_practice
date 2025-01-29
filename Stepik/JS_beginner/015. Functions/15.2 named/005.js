// Остаточные параметры, вывод значений
function printFunction(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ', b);
    console.log('rest = ' + rest);
}

printFunction(1, 2, 3, 4, 5);
