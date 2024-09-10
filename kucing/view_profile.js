document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('loggedInUsername');
    document.getElementById('profileUsername').textContent = username;

    const userProfile = JSON.parse(localStorage.getItem('userProfile')) || {};
    if (userProfile[username]) {
        document.getElementById('profileName').textContent = userProfile[username].name || 'N/A';
        document.getElementById('profileEmail').textContent = userProfile[username].email || 'N/A';
        document.getElementById('profilePhone').textContent = userProfile[username].phone || 'N/A';
        document.getElementById('profileDescription').textContent = userProfile[username].description || 'N/A';
    } else {
        document.getElementById('profileName').textContent = 'N/A';
        document.getElementById('profileEmail').textContent = 'N/A';
        document.getElementById('profilePhone').textContent = 'N/A';
        document.getElementById('profileDescription').textContent = 'N/A';
    }
});
