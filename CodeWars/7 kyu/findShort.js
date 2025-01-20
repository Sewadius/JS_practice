// Shortest Word

function findShort(s) {
    let arr = s.split(' ').map(el => el.length);
    return Math.min(...arr);
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));  // 3
console.log(findShort("Let's travel abroad shall we"));     // 2
