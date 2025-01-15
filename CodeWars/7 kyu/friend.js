// Friend of Foe?

const LENGTH = 4;

function friend(friends) {
    return friends.filter(
        name => name.length == LENGTH
    );
}

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));   // [ 'Ryan', 'Yous' ]
console.log(friend(["Peter", "Stephen", "Joe"]));           // []
