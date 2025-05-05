'use struict';

const countNumbers = arr => {
    let total = 0;

    for (const i of arr)
        for (const j of i)
            total++;
    
    return total;
};

// 9 - количество элементов
console.log(countNumbers([
    [1,2,3],
    [1,2,3],
    [1,2,3]
]));
