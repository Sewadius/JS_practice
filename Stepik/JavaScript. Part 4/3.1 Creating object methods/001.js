'use strict';

function createUser(name, age) {
    return {
        "name": name,
        "age": age,
        introduce() {
            console.log(`Привет, меня зовут ${name}, мне ${age} лет.`);
        }
    };
}

createUser("Alice", 30).introduce();
