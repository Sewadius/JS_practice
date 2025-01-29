// Метод match()
// Возвращает совпадение при сопоставлении с регулярным выражением

const creditCardNumber = "1234-5678-8123-1234";

// 'Валидный номер'
if (creditCardNumber.match(/^\d{4}-\d{4}-\d{4}-\d{4}$/))
    console.log('Валидный номер');
else
    console.log('Невалидный номер');
