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
})