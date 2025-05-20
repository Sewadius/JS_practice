'use strict';

function create_user(name) {
    return {
        name,
        greet: function () {
            console.log(this.name);
        }
    }
}

create_user('Alice').greet();   // 'Alice'
