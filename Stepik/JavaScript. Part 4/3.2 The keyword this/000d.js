'use strict';

function greet() {
    console.log(this.name);
}

const obj1 = { name: 'Charlie' };

greet.call(obj1);       // 'Charlie'
