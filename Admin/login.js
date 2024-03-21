document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validate username and password
        if (username.trim() === '' || password.trim() === '') {
            alert('Please enter both username and password.');
            return;
        }

        // Simulate storing data in console
        console.log('Username:', username);
        console.log('Password:', password);

        // Clear form fields
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';

        // Show success message
        alert('Signup successful!');
    });
});
