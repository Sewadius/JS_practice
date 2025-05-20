'use strict';

const createCounter = value => {
    return {
        value,
        increment() {
            this.value++;
        }
    }
};

const obj = createCounter(12);
obj.increment();

console.log(obj.value);     // 13

