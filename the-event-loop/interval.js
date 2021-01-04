let count = 3;
const timer = setInterval(callback, 1000);
function callback(){
  console.log(count--)
  if(count <= 0){
    console.log('Blast off!');
    clearInterval(timer);
  }
}
