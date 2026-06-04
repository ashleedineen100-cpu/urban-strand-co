// Ash Dineen, 2026
// Portfolio Website JavaScript

// Welcome message displayed on newsletter page
window.onload = function () {

    // Only show alert on newsletter page
    if (document.getElementById("firstname")) {

        alert(
            "Welcome to Urban Strand & Co. newsletter signup"
        );

    }

};

// Newsletter form validation
function validateForm() {

	// Get form values
	let firstName =
	    document.getElementById("firstname").value.trim(); 
		
	let lastName =
	    document.getElementById("lastname").value.trim(); 
		
	let email =
	    document.getElementById("email").value.trim(); 
		
	// Check required fields
	if (firstName === "" || 
		lastName === "" || 
		email === "") { 
		
		alert("Please complete all required fields."); 
	   
		// Prevent form submission if validation fails 
		return false;
	   
    }

    // Check email format
    if (email.indexOf("@") === -1 ||
        email.indexOf(".") === -1) {

        alert("Please enter a valid email address.");

        return false;
    }

    // Success message
    alert("Thank you for signing up to the newsletter.");

    return true;
}