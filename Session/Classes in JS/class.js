class Bank{
    constructor() {
        console.log('init');
        this.balance = 0;
    }
    hi(){
        this.balance+=1;
        console.log('Hello', this.balance);
    }
}

let bankObj = new Bank();
bankObj.hi();