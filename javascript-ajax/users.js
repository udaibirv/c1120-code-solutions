var $userList = document.querySelector('#user-list');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function(event){
  console.log(xhr.status);
  console.log(xhr.response);
  for(var user in xhr.response){
    var $li = document.createElement('li');
    $li.textContent = xhr.response[user]['name'];
    $userList.append($li);
  }

})
xhr.send();
