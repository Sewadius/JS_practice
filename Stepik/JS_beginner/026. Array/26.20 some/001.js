// Метод some() проверяет, удовлетворяет ли элемент массива условию
// Возвращает: boolean

const arr = [4, 5, 8, 4, 4];

function isBiggerThan5(element, index, array) {
  return element > 5;
}

function isLessThan3(element, index, array) {
  return element < 3;
}

console.log(arr.some(isBiggerThan5));   // true
console.log(arr.some(isLessThan3));     // false
