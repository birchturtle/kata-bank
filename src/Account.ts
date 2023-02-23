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
        this.logTransaction(new Transaction(this.getCurrentDate(), amount, this.balance));
    }
    withdraw(amount: number) {
        if (amount <= 0) {
            throw new RangeError("Negative withdraw amount");
        } else if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }
        this.balance -= amount;
        this.logTransaction(new Transaction(this.getCurrentDate(), -amount, this.balance));
    }
    printStatement(): string {
        if (this.transactions.length < 1) {
            return "No transactions"
        }
        let statement = "Date\t\t Amount\t\t Balance\n";
        this.transactions.forEach(t => {
            statement += t.toFormattedString();
        });
        return statement;
    }

    private logTransaction(t: Transaction) {
        this.transactions.push(t);
    }
    private getCurrentDate() {
        let today = new Date();
        return today.getDate().toString() + "." + (today.getMonth() + 1).toString() + "." + today.getFullYear().toString();
    }
}

class Transaction {
    date: string;
    amount: number;
    balance: number;

    constructor(date: string, amount: number, balance: number) {
        this.date = date;
        this.amount = amount;
        this.balance = balance;
    }

    public toFormattedString(): string {
        return this.date.toString() + "\t" + this.amount.toFixed(2).toString() + "\t\t " + this.balance.toFixed(2).toString() + "\n";
    }
}