console.log('hello, world');
var one = document.querySelector('h1');
console.log('Value of variable one: ', one);
console.dir(one);

var explanationOne = document.querySelector("#explanation");
console.log('Value of variable explanationOne: ', explanationOne);
console.dir(explanationOne);

var hintOne = document.querySelector('.hint')
console.log('Value of variable hintOne: ', hintOne);
console.dir(hintOne);

var pElements = document.querySelectorAll('p');
console.log('The nodeList for all elements type p: ', pElements);

var example = document.querySelectorAll(".example-link");
console.log('The nodelist for all elements with class type example-link: ', example);
