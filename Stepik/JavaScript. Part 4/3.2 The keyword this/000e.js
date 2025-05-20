'use strict';

const obj2 = {
    name: 'Dave',
    greet: function () {
        const inner = () => {
            console.log(this.name);
        };
        inner();
    }
};

obj2.greet();   // 'Dave'
