// UPI
let upi = {
    balance: 0,
    transactions: [],
    showBalance: function () {
        updateStatus(`Your current balance is $${this.balance}`, 'info');
    },
    deposit: function (amount) {
        if (isNaN(amount) || amount <= 0) {
            updateStatus("Invalid deposit amount.", 'error');
            return;
        }
        this.balance += amount;
        this.record('Deposit', amount);
        updateStatus(`Deposit successful. Your new balance is $${this.balance}`, 'success');
    },
    withdraw: function (amount) {
        if (isNaN(amount) || amount <= 0) {
            updateStatus("Invalid withdrawal amount.", 'error');
            return;
        }
        if (amount > this.balance) {
            updateStatus("Insufficient balance.", 'error');
        } else {
            this.balance -= amount;
            this.record('Withdraw', amount);
            updateStatus(`Withdrawn $${amount}. Remaining balance is $${this.balance}`, 'success');
        }
    },
    record: function (type, amount) {
        this.transactions.unshift({ type, amount, date: new Date() });
        localStorage.setItem('upiBalance', upi.balance);
        localStorage.setItem('upiTransactions', JSON.stringify(upi.transactions));
        updateTransactionsTable();
    }
};

// Credit Card
let cc = {
    limit: 100000,
    bill: 0,
    pendingBalance: 100000,
    transactions: [],
    showPending: function () {
        updateStatus(`Your pending balance is $${this.pendingBalance}`, 'info');
    },
    billDue: function () {
        updateStatus(`Your current bill due is $${this.bill}`, 'info');
    },
    payBill: function (amount) {
        if (this.bill === 0) {
            updateStatus("No bill to pay.", 'info');
            return;
        }
        if (isNaN(amount) || amount <= 0) {
            updateStatus("Invalid payment amount.", 'error');
            return;
        }
        if (amount > this.bill) {
            updateStatus("Payment exceeds the current bill.", 'error');
        } else {
            this.bill -= amount;
            this.pendingBalance += amount;
            this.record('Bill Payment', amount);
            updateStatus(`You have paid $${amount}. Remaining bill due is $${this.bill}. Your pending balance is $${this.pendingBalance}`, 'success');
            if (this.bill === 0) {
                updateStatus("Bill paid completely!", 'success');
            }
        }
    },
    buyStuff: function (amount) {
        if (isNaN(amount) || amount <= 0) {
            updateStatus("Invalid purchase amount.", 'error');
            return;
        }
        if (amount > this.pendingBalance) {
            updateStatus("Insufficient balance.", 'error');
        } else {
            this.pendingBalance -= amount;
            this.bill += amount;
            this.record('Purchase', amount);
            updateStatus(`You have bought something worth $${amount}. Your pending balance is $${this.pendingBalance}. Current bill due is $${this.bill}`, 'success');
        }
    },
    checkLimit: function () {
        updateStatus(`Your credit limit is $${this.limit}`, 'info');
    },
    record: function (type, amount) {
        this.transactions.unshift({ type, amount, date: new Date() });
        localStorage.setItem('ccLimit', cc.limit);
        localStorage.setItem('ccBill', cc.bill);
        localStorage.setItem('ccPendingBalance', cc.pendingBalance);
        localStorage.setItem('ccTransactions', JSON.stringify(cc.transactions));
        updateTransactionsTable();
    }
};

// Digi PassBook
function printTransactions() {
    console.clear();
    console.log("UPI Transactions:");
    console.table(upi.transactions);
    console.log("Credit Card Transactions:");
    console.table(cc.transactions);
}

function updateTransactionsTable() {
    let tableBody = document.querySelector('#transactions-table tbody');
    tableBody.innerHTML = '';
    let transactions = [...upi.transactions, ...cc.transactions].sort((a, b) => b.date - a.date).slice(0, 10);
    transactions.forEach(transaction => {
        let row = document.createElement('tr');
        let typeCell = document.createElement('td');
        typeCell.textContent = transaction.type;
        let amountCell = document.createElement('td');
        amountCell.textContent = transaction.amount;
        let dateCell = document.createElement('td');
        dateCell.textContent = new Date(transaction.date).toLocaleString();
        row.appendChild(typeCell);
        row.appendChild(amountCell);
        row.appendChild(dateCell);
        tableBody.appendChild(row);
    });
}

// Status Update
function updateStatus(message, type = 'info') {
    let statusContent = document.getElementById('status-content');
    statusContent.classList.remove('success', 'error', 'info');
    if (type === 'success') {
        statusContent.classList.add('success');
    } else if (type === 'error') {
        statusContent.classList.add('error');
    } else {
        statusContent.classList.add('info');
    }
    statusContent.textContent = message;
    localStorage.setItem('statusMessage', message);
    localStorage.setItem('statusType', type);
}

// Load Data
function loadData() {
    upi.balance = Number(localStorage.getItem('upiBalance')) || 0;
    upi.transactions = JSON.parse(localStorage.getItem('upiTransactions')) || [];
    
    cc.limit = Number(localStorage.getItem('ccLimit')) || 100000;
    cc.bill = Number(localStorage.getItem('ccBill')) || 0;
    cc.pendingBalance = Number(localStorage.getItem('ccPendingBalance')) || 100000;
    cc.transactions = JSON.parse(localStorage.getItem('ccTransactions')) || [];
    
    let statusMessage = localStorage.getItem('statusMessage') || '';
    let statusType = localStorage.getItem('statusType') || 'info';
    updateStatus(statusMessage, statusType);
    updateTransactionsTable();
}

// Event listeners for buttons and inputs
document.getElementById('show-balance').addEventListener('click', () => upi.showBalance());
document.getElementById('withdraw').addEventListener('click', () => {
    let amount = Number(document.getElementById('withdraw-amount').value);
    upi.withdraw(amount);
    document.getElementById('withdraw-amount').value = '';
});
document.getElementById('withdraw-amount').addEventListener('keydown', (key) => {
    if(key.code === "Enter"){
        let amount = Number(document.getElementById('withdraw-amount').value);
        upi.withdraw(amount);
        document.getElementById('withdraw-amount').value = '';
    }
});
document.getElementById('deposit').addEventListener('click', () => {
    let amount = Number(document.getElementById('deposit-amount').value);
    upi.deposit(amount);
    document.getElementById('deposit-amount').value = '';
});
document.getElementById('deposit-amount').addEventListener('keydown', (key) => {
    if(key.code === "Enter"){
        let amount = Number(document.getElementById('deposit-amount').value);
        upi.deposit(amount);
        document.getElementById('deposit-amount').value = '';
    }
});
document.getElementById('cc-balance').addEventListener('click', () => cc.showPending());
document.getElementById('bill-due').addEventListener('click', () => cc.billDue());
document.getElementById('buy').addEventListener('click', () => {
    let amount = Number(document.getElementById('buy-amount').value);
    cc.buyStuff(amount);
    document.getElementById('buy-amount').value = '';
});
document.getElementById('buy-amount').addEventListener('keydown', (key) => {
    if(key.code === "Enter"){
        let amount = Number(document.getElementById('buy-amount').value);
        cc.buyStuff(amount);
        document.getElementById('buy-amount').value = '';
    }
});
document.getElementById('pay-bill').addEventListener('click', () => {
    let amount = Number(document.getElementById('pay-amount').value);
    cc.payBill(amount);
    document.getElementById('pay-amount').value = '';
});
document.getElementById('pay-amount').addEventListener('keydown', (key) => {
    if(key.code === "Enter"){
        let amount = Number(document.getElementById('pay-amount').value);
        cc.payBill(amount);
        document.getElementById('pay-amount').value = '';
    }
});
document.getElementById('check-limit').addEventListener('click', () => cc.checkLimit());
document.getElementById('print-transactions').addEventListener('click', () => printTransactions());