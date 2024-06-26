var $ = function(id){
  return document.getElementById(id); };
  
  var volunteerListArray =[];
  var displayVolunteerList = function () {
    
    //display voluteers in Text are
    var voluteerListString="";
    for (var i=0; i < volunteerListArray.length();i++)
  var addVolunteer=function() {
    
    var volunteerString = $("first_name").value() + "" + $("last_name").value();
    volunteerListArray.push(volunteerString);
    
    //display the volunteers in a clear form
    displayVolunteerList();
    //clear fields
    $("first_name").value() = "";
    $("last_name").value() = "";
    $("first_name").focus();
  }
  var deleteVolunteer = function(){
    var volunteerString = $("first_name").value() + "" + $("last_name").value();

    //remove the string from the array
    for (var i=0; i < volunteerListArray.length(); i++){
      if (volunteerListArray[i].trim() == volunteerString.trim()){
        volunteerListArray.splice(i,1);
      }
    }
    //display the volunteers
    displayVolunteerList();

    //delete fields 
    $("first_name").value() = "";
    $("last_name").value() = "";
    $("first_name").focus();

    //JS functions
    window.onload = function () {
      $("add_button").onclick = addVolunteer;
      $("delete_button").onclick = deleteVolunteer;
      $("clear_button").onclick = clearList;
      $("first_name").focus();      
  }
}; 
  }