/* write functions that define the action for each event */
function validate() {
	var sid = document.getElementById("sid").value;
	var pwd1 = document.getElementById("pwd1").value;
	var pwd2 = document.getElementById("pwd2").value;
	var uname = document.getElementById("uname").value;
	var genm = document.getElementById("genm").checked;
	var genf = document.getElementById("genf").checked;
	var errMsg = "";								/* stores the error message */
	var result = true;							/* assumes no errors */
	var pattern = /^[a-zA-Z ]+$/;		/* regular expression for letters and spaces only */

	if (sid == "") {
	errMsg += "User ID cannot be empty.\n";
	}
	if (pwd1 == "") {
	errMsg += "Password cannot be empty.\n";
	}
	if (pwd2 == "") {
	errMsg += "Retype password cannot be empty.\n";
	}
	if (uname == "") {
	errMsg += "User name cannot be empty.\n";
	}
	if ((genm == "")&&(genf == "")) {
	errMsg += "A gender must be selected.\n";
	}
		
	if (sid.indexOf('@') == 0 ) {
	errMsg += "User ID cannot start with an @ symbol.\n";
	}
	if (sid.indexOf('@') < 0 ) {
	errMsg += "User ID must contain an @ symbol.\n";
	}

	if (pwd1 != pwd2) {
		errMsg += "Passwords do not match.\n";
	}
	
	if (! uname.match (pattern)) {
		errMsg += "User name contains symbols.\n";
	}

	if (errMsg != "") {
		alert (errMsg);
		result = false;
	} 
	return result;
}

function init () {
  var regForm = 	document.getElementById("regform");

  regForm.onsubmit = validate;
}

window.onload = init;