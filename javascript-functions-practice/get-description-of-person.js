/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person){
  var name = person.name;
  var job = person.occupation;
  var birth = person.birthPlace;
  var description = name + ' is a ' + job + ' from ' + birth + '.';
  return description;
}
