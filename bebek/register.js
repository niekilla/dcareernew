document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    localStorage.setItem(username, JSON.stringify({ password, role }));

    window.location.href = 'login.html';
});
