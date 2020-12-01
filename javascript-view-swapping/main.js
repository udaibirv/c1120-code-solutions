$tabContainer = document.querySelector('.tab-container');
$tab = document.querySelectorAll('.tab');
$view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function(event){
  if(event.target.matches('.tab')){
    for (var i = 0; i < $tab.length; i++) {
      var current = $tab[i];
      if (current === event.target) {
        current.className = 'tab ' + 'active'
      }else{
        current.className = 'tab';
      }
    }

    var $dataView = event.target.getAttribute('data-view');
    for (var i = 0; i < $view.length; i++) {
      var currentChar = $view[i];
      if (currentChar !== $dataView) {
        currentChar.className = 'view hidden';
      }else{
        currentChar.className =  'view';
      }
    }

  }



})
