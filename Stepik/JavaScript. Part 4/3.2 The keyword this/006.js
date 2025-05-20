'use strict';

function createUserAccount(username) {
    return {
        username,
        password: undefined,
        setPassword(password) {
            if (password.length > 7)
                this.password = password;
        }
    };
}

const obj = createUserAccount('username');
obj.setPassword('1234567');
console.log(obj.password);      // undefined

obj.setPassword('215Jannet');
console.log(obj.password);      // '215Jannet'
