document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('profileForm');

    // Load user data from localStorage
    const loadProfile = () => {
        const username = localStorage.getItem('loggedInUsername');
        document.getElementById('username').value = username;

        const userProfile = JSON.parse(localStorage.getItem('userProfile')) || {};
        if (userProfile[username]) {
            document.getElementById('name').value = userProfile[username].name || '';
            document.getElementById('email').value = userProfile[username].email || '';
            document.getElementById('phone').value = userProfile[username].phone || '';
            document.getElementById('description').value = userProfile[username].description || '';
        }
    };

    loadProfile();

    // Save profile data to localStorage
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const profile = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            description: document.getElementById('description').value
        };

        let userProfiles = JSON.parse(localStorage.getItem('userProfile')) || {};
        userProfiles[username] = profile;
        localStorage.setItem('userProfile', JSON.stringify(userProfiles));

        alert('Data diri berhasil disimpan!');
    });
});
