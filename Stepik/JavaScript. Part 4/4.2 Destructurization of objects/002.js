'use strict';

const printInfo = obj => {
    const result = [];
    const { make: newMake, model: newModel, year: newYear } = obj;

    for (const el of [newMake, newModel, newYear])
        if (typeof el == 'undefined')
            result.push('Неизвестно');
        else
            result.push(el);

    console.log(`${result[0]} ${result[1]} ${result[2]}`);
};

printInfo(
    { "make": "Toyota", "model": "Camry" }
);
