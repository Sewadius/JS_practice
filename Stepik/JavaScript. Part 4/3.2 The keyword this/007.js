'use strict';

const createBankAccount = initialBalance => {
    return {
        balance: initialBalance,
        debit(sum) {
            if (sum <= this.balance)
                this.balance -= sum;
        },
        credit(sum) {
            this.balance += sum;
        }
    };
};

const obj = createBankAccount(100);

obj.debit(100);
console.log(obj.balance);       // 0

obj.credit(70);
console.log(obj.balance);       // 70
