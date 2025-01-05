// Метод time()
// Измерение времени выполнения участка кода

console.time('myTimer');

for (let i = 0; i < 1000000; i++) {}

console.timeEnd('myTimer');
