
class BankAccount{
    private _balance:number;

    constructor(initialDeposit:number){
        this._balance =  initialDeposit
    }


   deposit(amount:number){
    if(amount<0){
        console.log('Error: Deposit amount must be positive!')
        return
    }
        this._balance +=amount;
        console.log(`Deposited: ${amount}. New balance: ${this._balance}`);
    }

    getBalance(){
        return this._balance
    }

}

const myAccount =  new BankAccount(500)
myAccount.deposit(5000)
console.log(myAccount.getBalance())