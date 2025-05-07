'use strict';

const createUser = (id, name, email) => {
    const obj = {};

    obj[`user_${id}_id`] = id;
    obj[`user_${id}_name`] = name;
    obj[`user_${id}_email`] = email;

    return obj;
};

// { user_1_id: 1, user_1_name: 'John', user_1_email: 'john.doe@example.com' }
console.log(createUser(
    1, 'John', 'john.doe@example.com'
));
