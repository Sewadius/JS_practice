'use strict';

const obj = {
    name: 'Alice',
    greet: function () {
        console.log(this.name);
    }
};

obj.greet();    // 'Alice'
