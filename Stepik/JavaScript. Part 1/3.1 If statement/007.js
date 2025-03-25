'use strict';

const timeOfDay = 'ночь';
let meal = 'перекус';

if (timeOfDay == 'утро')
    meal = 'завтрак';
else if (timeOfDay == 'день')
    meal = 'обед';
else if (timeOfDay == 'вечер')
    meal = 'ужин';

console.log(meal);
