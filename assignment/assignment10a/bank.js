// UPI
let upi = {
    balance: 0,
    withdrawn: 0,
    deposited: 0,
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
        alert(`Deposit successful. Your new balance is $${this.balance}`);
    },
    withdraw: function () {
        let amount = parseFloat(prompt("Enter the amount to withdraw: "));
        if (isNaN(amount) || amount <= 0) {
            alert("Invalid withdrawal amount.");
            return;
        }
        else if (amount > this.balance) {
            alert("Insufficient balance.");
        } 
        else {
            this.balance -= amount;
            this.withdrawn += amount;
            alert(`Withdrawn $${amount}. Remaining balance is $${this.balance}`);
        }
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
    limit: 10000,
    bill: 0,
    pendingBalance: 10000,
    buy: 0,
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
        }
        else if (amount > this.bill) {
            alert("Payment exceeds the current bill.");
        } 
        else {
            this.bill -= amount;
            this.pendingBalance += amount;
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
        }
        else if (amount > this.pendingBalance) {
            alert("Insufficient balance.");
        } 
        else {
            this.pendingBalance -= amount;
            this.bill += amount;
            alert(`You have bought something worth $${amount}. Your pending balance is $${this.pendingBalance}`);
        }
    },
    checkLimit: function () {
        alert(`Your credit limit is $${this.limit}`);
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

// // Digi PassBook
// let passbook={

// };

// function pass(){
//     passbook.print();
// }