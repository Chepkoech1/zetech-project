// Function to handle login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Check if login credentials are correct
    // In a real scenario, you would compare these with credentials stored in a database
    // For demonstration purposes, let's use hardcoded credentials for now
    if (username === 'sandra' && password === '123') {
        alert('Login successful!');
        window.location.href = 'home.html'; // Redirect to home page upon successful login
    } else {
        alert('Login failed. Please check your username and password.');
    }

    // Clear form fields
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
});
