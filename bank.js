let balance = 0;
let upi_history = [];
let upi = {
    deposit: function (amount) {
        if (isNaN(amount) || amount <= 0) {
            updateStatus("Enter a valid amount.");
        } else {
            balance += amount;
            updateStatus(`Amount deposited: ${amount}`);
            upi_history.push(`Amount deposited: ${amount}`);
            document.getElementById('upi_balance').innerText = `Balance: ${balance}`;
        }
    },
    withdraw: function (amount) {
        if (isNaN(amount) || amount <= 0) {
            updateStatus("Enter a valid amount.");
        } else if (amount > balance) {
            updateStatus("Insufficient balance.");
        } else {
            balance -= amount;
            updateStatus(`Withdrawn amount: ${amount}`);
            upi_history.push(`Withdrawn amount: ${amount}`);
            document.getElementById('upi_balance').innerText = `Balance: ${balance}`;
        }
    },
    upi_transaction: function () {
        updateStatus(`UPI Transaction History:\n${upi_history.join("\n")}`);
    }
};

let creditLimit = 10000;
let creditBalance = 10000;
let bill = 0;
let cc_history = [];
let creditCard = {
    check_limit: function () {
        updateStatus(`Available Credit Card Limit: ${creditLimit}`);
        cc_history.push(`Checked credit card limit: ${creditLimit}`);
    },
    pay_bill: function (amount) {
        if (isNaN(amount) || amount <= 0) {
            updateStatus("Enter a valid amount.");
        } else if (amount > bill) {
            updateStatus("Payment exceeds available amount.");
        } else {
            creditBalance += amount;
            bill -= amount;
            updateStatus(`Bill paid: ${amount}`);
            cc_history.push(`Bill paid: ${amount}`);
            document.getElementById('cc_balance').innerText = `Balance: ${creditBalance}`;
        }
    },
    buy: function (amount) {
        if (isNaN(amount) || amount <= 0) {
            updateStatus("Enter a valid amount.");
        } else if (amount > creditLimit) {
            updateStatus("Exceeds credit card limit.");
        } else {
            creditBalance -= amount;
            bill += amount;
            updateStatus(`Amount bought: ${amount}`);
            cc_history.push(`Amount bought: ${amount}`);
            document.getElementById('cc_balance').innerText = `Balance: ${creditBalance}`;
        }
    },
    cc_transaction: function () {
        updateStatus(`Credit Card Transaction History:\n${cc_history.join("\n")}`);
    }
};

function updateStatus(message) {
    alert(message);
}

document.getElementById('dep_bttn').addEventListener('click', () => {
    let amount = parseFloat(document.getElementById('upi_deposit').value);
    upi.deposit(amount);
});

document.getElementById('wit_bttn').addEventListener('click', () => {
    let amount = parseFloat(document.getElementById('upi_withdraw').value);
    upi.withdraw(amount);
});

document.getElementById('upi_transaction').addEventListener('click', () => {
    upi.upi_transaction();
});

document.getElementById('buy_bttn').addEventListener('click', () => {
    let amount = parseFloat(document.getElementById('cc_buy').value);
    creditCard.buy(amount);
});

document.getElementById('pay_bttn').addEventListener('click', () => {
    let amount = parseFloat(document.getElementById('cc_pay').value);
    creditCard.pay_bill(amount);
});

document.getElementById('cc_transaction').addEventListener('click', () => {
    creditCard.cc_transaction();
});


upi.balance();
creditCard.cc_balance();