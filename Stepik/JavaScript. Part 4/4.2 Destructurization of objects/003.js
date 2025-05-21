'use strict';

function printLocationInfo({ name, location }) {
    const { city, street } = location;

    console.log(`${name} ${street}`);
}

// John 5th Avenue
printLocationInfo(
    {
        "name": "John",
        "location": { "city": "New York", "street": "5th Avenue" }
    }
);
