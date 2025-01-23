// Training JS #10: loop statement - for

function pickIt(arr) {
    let odd = [], even = [];

    for (let i = 0; i < arr.length; i ++)
        arr[i] & 1 ? odd.push(arr[i]) : even.push(arr[i]);

    return [odd, even];
}

console.log(pickIt([3,2,1]));   // [ [ 3, 1 ], [ 2 ] ]
