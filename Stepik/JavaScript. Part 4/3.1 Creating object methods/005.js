'use strict';

const createNotification = () => {
    return {
        notify(status) {
            let message = "";

            switch (status) {
                case "success":
                    message = "Операция прошла успешно!"; break;
                case "error":
                    message = "Произошла ошибка!"; break;
                case "warning":
                    message = "Предупреждение!"; break;
                default:
                    message = "Неизвестный статус."; break;
            }

            console.log(message);
        }
    }
};

// Операция прошла успешно!
// Произошла ошибка!
// Предупреждение!
// Неизвестный статус.

for (const el of ["success", "error", "warning", "err"]) {
    createNotification().notify(el);
}
