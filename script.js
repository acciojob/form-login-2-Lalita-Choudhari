//your JS code here. If required.
function submitForm() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
	var formInfo = "First Name: " + firstName + "\n" +
                 "Last Name: " + lastName + "\n" +
		 "Phone Number: " + phone + "\n" +
                 "Email: " + email + "\n" +
                 
  
  alert(formInfo);
}