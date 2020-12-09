function exampleConstructor(){

}
console.log('value of prototype property of exampleConstructor:', exampleConstructor.prototype);
console.log('typeof prototype property of exampleConstructor:', typeof exampleConstructor.prototype);

var newFunction = new exampleConstructor();
console.log('value of newFunction:', newFunction);

var instance = newFunction instanceof exampleConstructor;
console.log('value of instanceof variable:', instance);
