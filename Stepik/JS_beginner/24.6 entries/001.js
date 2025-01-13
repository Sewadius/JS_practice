// Метод entries()

let items = new Set(['камень', 'золото', 'серебро']);
let entries = items.entries();
console.log(entries);

for (const entry of entries)
    console.log(entry);
