/* exported Bank */
function Bank (){
  this.nextAccountNumber = 1
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance){
  if(balance > 0){
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount['balance'] = balance;
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  }else{
    return null;
  }
}
Bank.prototype.getAccount = function(number){
  for(var i = 0; i < this.accounts.length; i++){
    if(this.accounts[i].number === number){
      return this.accounts[i];
    }
  }
  return null;
}
