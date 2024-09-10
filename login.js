// Function to handle login
function login() {
    // Get values from the input fields
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const role = document.getElementById('loginRole').value;

    // Check if all fields are filled (simplified approach)
    if (username && password && role) {
        // Simulate login process (Replace this with actual authentication logic)
        const userData = JSON.parse(localStorage.getItem(`${username}-${role}`)) || {};

        // Store user info in localStorage
        localStorage.setItem('currentUser', JSON.stringify({ username, role }));

        // Redirect based on role
        if (role === 'jobseeker') {
            window.location.href = 'jobseeker-profile.html'; // Redirect to jobseeker profile page
        } else if (role === 'company') {
            window.location.href = 'company-dashboard.html'; // Redirect to company dashboard page
        }
    } else {
        alert('Please fill in all fields and select a role.');
    }
}
