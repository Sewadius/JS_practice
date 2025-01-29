let items = new Set([1, 2, 3]);
let entries = items.entries();
let result = 0;

// [Set Entries] { [ 1, 1 ], [ 2, 2 ], [ 3, 3 ] }
console.log(entries);

for (const entry of entries)
    result += entry[0] + entry[1];

console.log(result);    // 12
