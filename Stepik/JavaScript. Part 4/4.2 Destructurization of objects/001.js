'use strict';

function printInfo({ make, model, year }) {
    console.log(`${make} ${model} ${year}`);
}

printInfo(
    { "make": "Toyota", "model": "Camry", "year": 2020 }
);
