export default class Account {
    private _balance: number;
    private transactions: Transaction[];

    constructor(balance: number) {
        this._balance = balance;
    }

    deposit(amount: number) {
        if (amount <= 0) {
            throw new RangeError("Negative deposit amount");
        }
        this._balance += amount;
    }
    withdraw(amount: number) {
        if (amount <= 0) {
            throw new RangeError("Negative withdraw amount");
        }
        this._balance -= amount;
    }
    printStatement(): string {
        return "";
    }

    private logTransaction(t: Transaction) {
        this.transactions.push(t);
    }
}

class Transaction {
    date: Date;
    amount: number;
    balance: number;
}