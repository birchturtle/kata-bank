import Account from "../src/Account";
import assert = require("node:assert");

describe("basic demands of account kata", () => {
    it("should respond to these three methods", () => {
        let account = new Account();
        assert.equal(account.withdraw(10), undefined);
        assert.equal(account.deposit(10), undefined);
        assert.equal(account.printStatement(), "");
    })
})