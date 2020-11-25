function handleFocus(event){
  console.log('focus event has fired');
  console.log('event.target.name ',  event.target.name);
}
function handleBlur(event){
  console.log('blur event has fired');
  console.log('event.target.name ', event.target.name);
}
function handleInput(event){
  console.log(event.target.name);
  console.log(event.target.value);
}

$name = document.querySelector('#user-name');
$email = document.querySelector('#user-email');
$message = document.querySelector('#user-message');

$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
