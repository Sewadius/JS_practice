'use strict';

const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    greet: function () {
        console.log(`Hello, ${this.fullName()}!`);
    }
};

person.greet();     // 'Hello, John Doe!'
