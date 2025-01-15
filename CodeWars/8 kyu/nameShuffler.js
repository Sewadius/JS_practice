// Name Shuffler

function nameShuffler(str) {
    const arr = str.split(' ');
    return `${arr[1]} ${arr[0]}`;
}

console.log(nameShuffler('John McClane'));  // McClane John
console.log(nameShuffler('tom jerry'));     // jerry tom
