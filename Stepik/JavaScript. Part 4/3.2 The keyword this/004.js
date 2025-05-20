'use strict';

const createRectangle = (width, height) => {
    return {
        width,
        height,
        area() {
            return this.width * this.height;
        }
    };
};

console.log(createRectangle(8, 5).area());  // 40

