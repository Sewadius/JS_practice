'use strict';

function getConfig(apiUrl, timeout, maxRetries) {
    const obj = {
        'apiUrl': apiUrl,
        'timeout': timeout,
        'maxRetries': maxRetries
    };

    Object.freeze(obj);

    return obj;
}

// {"apiUrl":"https://api.example.com","timeout":5000,"maxRetries":3}
console.log(getConfig(
    'https://api.example.com', 5000, 3
));
