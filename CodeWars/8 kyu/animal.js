// Training JS #5: Basic data types - Object
const animal = obj => 
    `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;

// This white dog has 4 legs.
console.log(animal({name: 'dog', legs: 4, color: 'white'}));
