let items = new Set([1, 1, 1]);
let entries = items.entries();
let result = 0;

console.log(entries);       // [Set Entries] { [ 1, 1 ] }

for (const entry of entries)
    result += entry[0] + entry[1];

console.log(result);        // 2
