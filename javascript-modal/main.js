var $modal = document.querySelector('.modal');
var $openModal = document.querySelector('.open-modal');
var $no = document.querySelector('.no');
var $body = document.querySelector('body');

function modalOn(){
  $modal.className = "modal" + "-on";
  $body.className = 'body ' + 'click';
  $openModal.className = 'open-modal' + '-closed';
}
function offModal(){
  $modal.className = "modal";
  $body.className = "body";
  $openModal.className = 'open-modal';
}
$openModal.addEventListener('click', modalOn);
$no.addEventListener('click', offModal);
