function headerText(){
  var $h1 = document.querySelector('h1');
  $h1.textContent = 'Hello There';
}
setTimeout(headerText, 2 * 1000);
