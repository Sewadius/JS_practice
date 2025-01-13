// Метод forEach()

// Определяем набор игровых сущностей
let entries = new Set();

// Добавляем несколько игровых объектов в набор
let player = { id: 1, type: 'player'};
let enemy1 = { id: 2, type: 'enemy'};
let ememy2 = { id: 3, type: 'enemy'};

entries.add(player);
entries.add(enemy1);
entries.add(ememy2);

function updatePosition(entry) {
    console.log(`Обновленная позиция объекта ${entry.id}`);
}

entries.forEach(updatePosition);
