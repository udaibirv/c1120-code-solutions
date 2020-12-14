var timer = setInterval(callback, 1000);

var counter = 3;
function callback(){
$h1 = document.querySelector('h1');
$h1.textContent = counter;
counter--;
if(counter < 0){
  $h1.textContent = '~Earth Beeeelooowww Us~';
  clearInterval(timer);
}

}
