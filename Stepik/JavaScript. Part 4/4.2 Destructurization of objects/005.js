'use strict';

const getFullName = ({ name, lastname }) => {
    return `${name} ${lastname}`;
};

// John Doe
console.log(getFullName(
    { "name": "John", "lastname": "Doe" }
));
