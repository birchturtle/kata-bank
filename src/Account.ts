export default class Account {
    balance: number;
    private transactions: Transaction[];

    constructor(balance: number) {
        this.balance = balance;
        this.transactions = new Array<Transaction>();
    }

    deposit(amount: number) {
        if (amount <= 0) {
            throw new RangeError("Negative deposit amount");
        }
        this.balance += amount;
    }
    withdraw(amount: number) {
        if (amount <= 0) {
            throw new RangeError("Negative withdraw amount");
        }
        this.balance -= amount;
    }
    printStatement(): string {
        if (this.transactions.length < 1) {
            return "No transactions"
        }
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