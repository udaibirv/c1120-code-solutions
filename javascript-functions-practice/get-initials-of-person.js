/* exported getInitialsOfPerson */
function getInitialsOfPerson(person){
  var first = person.firstName;
  var last = person.lastName;
  var initials = first.charAt(0) + last.charAt(0);
  return initials;
}
