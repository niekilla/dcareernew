document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    const user = JSON.parse(localStorage.getItem(username));

    if (user && user.password === password && user.role === role) {
        localStorage.setItem('currentUser', JSON.stringify({ username, role }));
        if (role === 'jobseeker') {
            window.location.href = 'dashboard.html';
        } else {
            window.location.href = 'company-profile2.html';
        }
    } else {
        alert('Username, password, or role is incorrect.');
    }
});
 