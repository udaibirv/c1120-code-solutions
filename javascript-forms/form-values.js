$contactForm = document.querySelector('#contact-form');
$contactForm.addEventListener('submit', function(event){
  event.preventDefault();

var names = $contactForm.elements.name.value;
var email = $contactForm.elements.email.value;
var message = $contactForm.elements.message.value;
var newObject = {};
newObject.names = names;
newObject.email = email;
newObject.message = message;
console.log(newObject);
$contactForm.reset();
});
