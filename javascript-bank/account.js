/* exported Account */
function Account(number, holder){
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}
Account.prototype.deposit = function (amount) {
  if(amount > 1){
    var depositTransaction = new Transaction('deposit', amount);
    this.transactions.push(depositTransaction);
    return true;
  }else{
    return false;
  }
}

Account.prototype.withdraw = function(amount){
  if(amount > 1){
    var withdrawTransaction = new Transaction('withdraw', amount);
    this.transactions.push(withdrawTransaction);
    return true;
  }else{
    return false;
  }
}

Account.prototype.getBalance = function(){
  var total = 0;
  for(var i = 0; i < this.transactions.length; i++){
    if(this.transactions[i].type === 'deposit'){
    total+=this.transactions[i].amount;
    }else if(this.transactions[i].type === 'withdraw'){
      total-=this.transactions[i].amount;
    }
}
return total;


}
