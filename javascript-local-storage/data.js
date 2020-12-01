/* exported todos */
window.addEventListener('beforeunload', function(event){
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);

})
var todos = [];
var previousTodosJSON = localStorage.getItem('javascript-local-storage');
if(previousTodosJSON !== null){
  var parsed = JSON.parse(previousTodosJSON);
  todos = parsed;
}
