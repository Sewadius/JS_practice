// String ends with?

const solution = (str, ending) =>
    str.endsWith(ending);

console.log(solution('abc', 'bc'));     // true
console.log(solution('abc', 'd'));      // false
