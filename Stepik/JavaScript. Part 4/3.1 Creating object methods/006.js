'use strict';

function createMovie(title, year) {
    return {
        getTitle: () => title,
        getDetails: () =>
            `Название: ${title}, Год выпуска: ${year}`
    }
}

// Inception
console.log(createMovie("Inception", 2010).getTitle());

// Название: Inception, Год выпуска: 2010
console.log(createMovie("Inception", 2010).getDetails());   
