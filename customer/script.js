document.addEventListener('DOMContentLoaded', function () {
    // Add your logic for the login/signup section here
    // For example, you can add event listeners for signin and signup buttons
    var signinButton = document.querySelector('.signinbtn');
    var signupButton = document.querySelector('.signupbtn');

    var signinForm = document.querySelector('.signinform form');
    var signupForm = document.querySelector('.signupform form');

    signinButton.addEventListener('click', function () {
        // Add logic for signin
        console.log('Signin button clicked');
        showForm('signin');
    });

    signupButton.addEventListener('click', function () {
        // Add logic for signup
        console.log('Signup button clicked');
        showForm('signup');
    });

    function showForm(formType) {
        if (formType === 'signin') {
            signinForm.style.display = 'block';
            signupForm.style.display = 'none';
        } else if (formType === 'signup') {
            signinForm.style.display = 'none';
            signupForm.style.display = 'block';
        }
    }

    // Form validation logic
    var loginButton = document.querySelector('.login-button');
    loginButton.addEventListener('click', function () {
        var username = signinForm.querySelector('input[type="text"]').value;
        var password = signinForm.querySelector('input[type="password"]').value;

        // Simple validation for demonstration purposes
        if (username && password) {
            console.log('Signin successful');
            if (username === "admin" && password === "adminpassword") {
                // Redirect to admin dashboard after successful admin login
                window.location.href = 'admin-dashboard.html';
            } else {
                // Redirect to the home page after successful user login
                window.location.href = 'home.html';
            }
        } else {
            console.log('Invalid credentials');
            // Add logic to display an error message to the user
        }
    });

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = signupForm.querySelector('input[placeholder="Enter Your Name"]').value;
        var email = signupForm.querySelector('input[placeholder="Email"]').value;
        var dob = signupForm.querySelector('input[type="date"]').value;
        var password = signupForm.querySelector('input[placeholder="Password"]').value;
        var confirmPassword = signupForm.querySelector('input[placeholder="Confirm password"]').value;

        // Simple validation for demonstration purposes
        if (name && email && dob && password && confirmPassword && password === confirmPassword) {
            console.log('Signup successful');
            // Add logic to handle successful signup (e.g., redirect to a dashboard)
        } else {
            console.log('Invalid signup data');
            // Add logic to display an error message to the user
        }
    });
});
