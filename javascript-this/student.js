/* exported student */
var student = {
  firstName: 'Udaibir',
  lastName: 'Virk',
  subject: 'JavaScript',
  getFullName: function(){
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function(){
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
  }
}
