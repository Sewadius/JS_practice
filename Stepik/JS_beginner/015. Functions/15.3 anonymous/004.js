// Пример с объектом

const ship = function(name, power) {
    return {'name': name, 'power': power};
};

const destiny = ship('destiny', 100);
destiny.power -= 10;

console.log(destiny.power);     // 90
