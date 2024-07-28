// UPI
let upi = {
    balance: 0,
    withdrawn: 0,
    deposited: 0,
    transactions: [],
    showBalance: function () {
        alert(`Your current balance is $${this.balance}`);
    },
    deposit: function () {
        let amount = parseFloat(prompt("Enter the amount to deposit: "));
        if (isNaN(amount) || amount <= 0) {
            alert("Invalid deposit amount.");
            return;
        }
        this.balance += amount;
        this.deposited += amount;
        this.record('Deposit', amount);
        alert(`Deposit successful. Your new balance is $${this.balance}`);
    },
    withdraw: function () {
        let amount = parseFloat(prompt("Enter the amount to withdraw: "));
        if (isNaN(amount) || amount <= 0) {
            alert("Invalid withdrawal amount.");
            return;
        } else if (amount > this.balance) {
            alert("Insufficient balance.");
        } else {
            this.balance -= amount;
            this.withdrawn += amount;
            this.record('Withdraw', amount);
            alert(`Withdrawn $${amount}. Remaining balance is $${this.balance}`);
        }
    },
    record: function (type, amount) {
        this.transactions.push({ type, amount });
    }
};

function showbal() {
    upi.showBalance();
}
function witmon() {
    upi.withdraw();
}
function depmon() {
    upi.deposit();
}

// Credit Card
let cc = {
    limit: 100000,
    bill: 0,
    pendingBalance: 100000,
    transactions: [],
    showPending: function () {
        alert(`Your pending balance is $${this.pendingBalance}`);
    },
    payBill: function () {
        alert(`Your current bill is $${this.bill}`);
        if (this.bill === 0) {
            alert("No bill to pay.");
            return;
        }
        let amount = parseFloat(prompt("Enter the amount to pay: "));
        if (isNaN(amount) || amount <= 0) {
            alert("Invalid payment amount.");
            return;
        } else if (amount > this.bill) {
            alert("Payment exceeds the current bill.");
        } else {
            this.bill -= amount;
            this.pendingBalance += amount;
            this.record('Bill Payment', amount);
            alert(`You have paid $${amount}. Your pending balance is $${this.pendingBalance}`);
            if (this.bill === 0) {
                alert("Bill paid completely!");
            }
        }
    },
    buyStuff: function () {
        let amount = parseFloat(prompt("Enter the cost of the item you want to buy: "));
        if (isNaN(amount) || amount <= 0) {
            alert("Invalid purchase amount.");
            return;
        } else if (amount > this.pendingBalance) {
            alert("Insufficient balance.");
        } else {
            this.pendingBalance -= amount;
            this.bill += amount;
            this.record('Purchase', amount);
            alert(`You have bought something worth $${amount}. Your pending balance is $${this.pendingBalance}`);
        }
    },
    checkLimit: function () {
        alert(`Your credit limit is $${this.limit}`);
    },
    record: function (type, amount) {
        this.transactions.push({ type, amount });
    }
};

function ccbal() {
    cc.showPending();
}
function ccbuy() {
    cc.buyStuff();
}
function ccpay() {
    cc.payBill();
}
function cclim() {
    cc.checkLimit();
}

// Digi PassBook
function passbook() {
    let choice = prompt(`Transaction to check:\n1.UPI Transaction\n2.Credit Card Transaction`);

    if (choice === '1') {
        console.clear();
        console.log("UPI Transactions:")
        console.table(upi.transactions.map((transaction, index) => {
            return {Type: transaction.type, Amount: transaction.amount};
        }));
    } else if (choice === '2') {
        console.clear();
        console.log("Credit Card Transactions:")
        console.table(cc.transactions.map((transaction, index) => {
            return {Type: transaction.type, Amount: transaction.amount};
        }));
    } else {
        alert("Invalid choice. Please enter '1' or '2'.");
    }
    alert("Check console for the transactions.")
}

function pass() {
    passbook();
}