'use strict';

function sumsOfInnerArrays(arr) {
    const result = [];
    let currentSum = 0;

    for (const inner of arr) {
        for (const i of inner)
            currentSum += i;
        
        result.push(currentSum);
        currentSum = 0;
    }

    return result;
} 

// [6,10,15] - сумма внутренних массивов 
console.log(sumsOfInnerArrays([
    [1,2,3],
    [1,2,3,4],
    [1,2,3,4,5]
]));
