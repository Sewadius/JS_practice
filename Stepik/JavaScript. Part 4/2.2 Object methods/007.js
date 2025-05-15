'use strict';

const printObjectEntries = obj => {
    const arr = Object.entries(obj);

    for (const elem of arr)
        console.log(`Ключ: ${elem[0]}, Значение: ${elem[1]}`);
};

printObjectEntries(
    { "a": 1, "b": 2, "c": 3 }
);
