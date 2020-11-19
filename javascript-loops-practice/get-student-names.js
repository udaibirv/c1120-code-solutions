/* exported getStudentNames */
function getStudentNames(students){
  var newArray = [];
  for(var key in students){
    var names = students[key];
    newArray.push(names.name)
  }
  return newArray;
}
