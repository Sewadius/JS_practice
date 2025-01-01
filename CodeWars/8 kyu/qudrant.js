// Quadrants
function quadrant(x, y) {
    if (x > 0) 
        return y > 0 ? 1 : 4;
    else
        return y > 0 ? 2 : 3;
}

console.log(quadrant(1, 2));         // 1
console.log(quadrant(-10, 100));     // 2
console.log(quadrant(-9, -3));       // 3
