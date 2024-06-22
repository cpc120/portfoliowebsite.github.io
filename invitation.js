// Get submit button element and store in a variable called "submitBtnEl"
let submitBtnEl = document.querySelector("input[type='submit']");

// Run a function when "Submit" button is clicked by attaching a 'click' event (e) to the button
submitBtnEl.addEventListener('click', function (e) {

// Prevent default submit of the form
e.preventDefault();

// Get submitted value of input field "volunteer name" and store it in a variable called "volunteerNameVal"
let volunteerNameVal = document.forms[0].volunteerName.value;

// Get submitted value of input field "Phone Number" and store it in a variable called "phoneNumberVal"
let phoneNumberVal = document.forms[0].phoneNumber.value;

// Get submitted value of input field "E-mail" and store it in a variable called "emailAddressVal"
let emailAddressVal = document.forms[0].emailAddress.value;

// Get span Elements to be updated by their id attribute values
let volunteerNameSpanEl = document.getElementById("volunteerName");
let phoneNumberSpanEl = document.getElementById("phoneNumber");
let emailAddressSpanEl = document.getElementById("emailAddress");

// Update the values in the format given in the webpage on form submit in a bold (strong) text

volunteerNameSpanEl.innerHTML = `<strong> ${volunteerNameVal}
</strong>`;
phoneNumberSpanEl.innerHTML = `<strong> ${phoneNumberVal} </strong>`;
emailAddressSpanEl.innerHTML = `<strong> ${emailAddressVal} </strong>`;

// Optional code below, clear the form fields after form submission
document.forms[0].reset();
});
