// Метод forEach()

let items = new Set(['яблоко', 'банан', 'вишня']);
let result = '_';

items.forEach(item => {
    result += item + '_';
});

console.log(result);    // _яблоко_банан_вишня_
