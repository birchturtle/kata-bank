import Account from "../src/Account";
import assert = require("node:assert");

describe("basic demands of account kata", () => {
    let account = new Account(500.00);
    it("should have correct starting balance", () => {
        assert.equal(account.balance, 500.00);
    })

    it("should respond to these three methods", () => {

        assert.equal(account.withdraw(10.00), undefined);
        assert.equal(account.deposit(10.00), undefined);
        assert.match(account.printStatement(), /.*/);
        })
    
    describe("Withdrawals", () => {

        let account = new Account(500.00);

        it("should withdraw correct amount from balance", () => {
            assert.strictEqual(account.balance, 500.00);
            const expectedBalanceAfterWithdraw = 300.00;

            account.withdraw(200.00);

            assert.strictEqual(account.balance, expectedBalanceAfterWithdraw);
        })
    })

    describe("Deposits", () => {

        let account = new Account(500.00);

        it("should deposit correct amount", () => {
            assert.strictEqual(account.balance, 500.00);
            const expectedBalanceAfterDeposit = 600.00;

            account.deposit(100.00);

            assert.strictEqual(account.balance, expectedBalanceAfterDeposit);
        })
    })

    describe("Statements", () => {
        let account = new Account(500.00);
        let expectedInitStatement = "No transactions";
        let expectedStatementAfterOneWithdrawal = 
            "Date\t\t Amount\t\t Balance\n" +
            getTodayForTestTransactions() + "\t" + 
            "-100.00\t\t 400.00\n";

        const expectedStatementAfterOneWithdrawalAndOneDeposit = 
            expectedStatementAfterOneWithdrawal +
            getTodayForTestTransactions() + "\t" + 
            "200.00\t\t 600.00\n";

        it("should be able to print statements", () => {
            let actualStatement = account.printStatement();

            assert.strictEqual(actualStatement, expectedInitStatement);
        })
        it("should print after a transaction (withdrawal)", () => {
            account.withdraw(100.00);

            let actualStatement = account.printStatement();

            assert.strictEqual(actualStatement, expectedStatementAfterOneWithdrawal);
        })
        it("should be able to deposit too", () => {
            account.deposit(200.00);

            let actualStatement = account.printStatement();

            assert.strictEqual(actualStatement, expectedStatementAfterOneWithdrawalAndOneDeposit);
        })
    })
})

function getTodayForTestTransactions(): string {
    let today = new Date();
    return today.getDate().toString() + "." + (today.getMonth() + 1).toString() + "." + today.getFullYear().toString();
}