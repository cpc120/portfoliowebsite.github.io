function replaceContent(){
var $ = function (id) {
  return document.getElementById(id);
};
var volunteerArray = [];

var displayVolunteers = function () {
  // display the volunteers in the text area
  var volunteerListString = "";
  for (var i = 0; i < volunteerArray.length; i++) {
    volunteerListString = volunteerListString + volunteerArray[i] + "\n";
  }
  $("volunteerList").value = volunteerListString;
};

var addVolunteer = function () {
  var volunteerString = $("#first_name").value + " " + $("last_name").value;
  for (var i = 0; i < volunteerArray.length; i++) {
    if (volunteerArray[i].trim() == volunteerString.trim) {
      volunteerArray.splice(i, 1);
    }
  }
  // store the data in an array
  volunteerArray.push(volunteerString);

  // display the volunteers and clear the add form
  displayVolunteers();

  // get the add form ready for next entry
  $("first_name").value = "";
  $("last_name").value = "";
  $("first_name").focus();
};
var deleteVolunteer = function () {
  var volunteerString = $("#first_name").value + " " + $("last_name").value;
  for (var i = 0; i < volunteerArray.length; i++) {
    if (volunteerArray[i].trim() == volunteerString.trim()) {
      volunteerArray.splice(i, 1);
    }
  }

  // display the volunteers and clear the add form
  displayVolunteers();

  // clear fields
  $("first_name").value = "";
  $("last_name").value = "";
  $("first_name").focus();
};
var clearList = function () {
  // delete the data from the arrays
  volunteerArray = [];
  $("volunteerList").value = "";
  $("first_name").focus();
};

var sortList = function () {
  // sort the scores
  volunteerArray.sort();

  // display the scores
  displayVolunteers();
};

//When the page is fully loaded, the buttons will be mapped to the JavaScript functions
window.onload = function () {
  $("add_button").onclick = addVolunteer;
  $("delete_button").onclick = deleteVolunteer;
  $("clear_button").onclick = clearList;
  $("sort_button").onclick = sortList;
  $("first_name").focus();
};
    }