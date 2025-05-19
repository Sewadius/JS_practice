'use strict';

function createTime() {
    return {
        convertMinutesToHours: minutes => {
            const hours = Number.parseInt(minutes / 60);
            const mins = minutes % 60;

            return `${hours}:${mins}`;
        }
    };
}

// 1:30
console.log(createTime().convertMinutesToHours(90));
