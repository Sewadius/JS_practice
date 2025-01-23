// Training JS #19: toUpperCase(), toLowerCase()

const alienLanguage = str => {
    let arr = str.toUpperCase().split(' ');

    arr = arr.map(el => 
        el.slice(0, -1) + el[el.length - 1].toLowerCase()
    );

    return arr.join(' ');
};

console.log(alienLanguage('My name is John'));  // My NAMe Is JOHn
