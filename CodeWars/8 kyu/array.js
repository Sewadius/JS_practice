// Training JS #4: Basic data types Array
const getLength = arr => arr.length;
const getFirst = arr => arr[0];
const getLast = arr => arr[arr.length - 1];

const pushElement = arr => {
    const el = 1;
    arr.push(el);
    return arr;
};

const popElement = arr => {
    arr.pop();
    return arr;
};

const arr = [1, 2, 3];

console.log(getLength(arr));    // 3
console.log(getFirst(arr));     // 1
console.log(getLast(arr));      // 3
console.log(pushElement(arr));  // [1, 2 ,3, 1]
console.log(popElement(arr));   // [1, 2, 3]
