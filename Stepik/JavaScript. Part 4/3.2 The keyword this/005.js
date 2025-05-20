'use strict';

function createList(initialArray) {
    return {
        list: initialArray,
        addItem(el) {
            this.list.push(el);
        }
    };
}

const obj = createList([1, 2, 3, 4]);
obj.addItem(5);

console.log(obj.list);
