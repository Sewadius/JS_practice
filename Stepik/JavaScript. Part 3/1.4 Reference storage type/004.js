'use strict';

const check = (arr1, arr2) =>
    arr1[0] == arr2[0] && arr1[1] == arr2[1] && arr1[2] == arr2[2];

console.log(check([1, 2, 3], [1, 2, 3]));
