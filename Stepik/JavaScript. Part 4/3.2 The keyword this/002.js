'use strict';

const createAddress = (street, city) => {
    return {
        street,
        city,
        fullAddress() {
            return `${this.city} ${this.street}`;
        }
    };
};

// 'New York 123 Main St'
console.log(
    createAddress('123 Main St', 'New York').fullAddress()
);
