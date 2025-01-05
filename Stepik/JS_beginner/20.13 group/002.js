// Вложение групп внутри других групп

console.log('Сообщение на верхнем уровне');

console.group('Группа 1');
console.log('Сообщение внутри Группы 1');

  console.group('Группа 1.1');
  console.log('Сообщение внутри Группы 1.1');
  console.groupEnd();

console.groupEnd();

console.log('Сообщение после Группы 1');
