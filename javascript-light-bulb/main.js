$bulb = document.querySelector('.bulb-container');
$body = document.querySelector('body');
$bulb.addEventListener('click', function(){
  $bulb.className = 'bulb-container-' +'clicked';
  $body.className = 'body ' + 'click';
})
