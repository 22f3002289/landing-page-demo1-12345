document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // In a real application, you would send these credentials to a server
        // For this demo, we'll just log them and show an alert
        console.log('Username:', username);
        console.log('Password:', password);

        if (username && password) {
            alert(`Attempting to log in with Username: ${username}`);
            // Here you would typically make an API call, e.g., using fetch()
            // fetch('/api/login', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ username, password }),
            // })
            // .then(response => response.json())
            // .then(data => {
            //     if (data.success) {
            //         alert('Login successful!');
            //         // Redirect or update UI
            //     } else {
            //         alert('Login failed: ' + data.message);
            //     }
            // })
            // .catch(error => {
            //     console.error('Error during login:', error);
            //     alert('An error occurred during login.');
            // });
        } else {
            alert('Please enter both username and password.');
        }
    });
});