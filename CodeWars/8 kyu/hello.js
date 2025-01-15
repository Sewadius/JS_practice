// Hello, Name or World!

function hello(name) {
    if (!name) return 'Hello, World!';
    return `Hello, ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`;
}

console.log(hello(''));         // 'Hello, World!'
console.log(hello('johN'));     // 'Hello, John!'
