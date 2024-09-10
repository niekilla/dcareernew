document.addEventListener('DOMContentLoaded', function() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const tableBody = document.querySelector('#userTable tbody');

    // Tambahkan baris ke tabel untuk setiap pengguna
    users.forEach(user => {
        const row = document.createElement('tr');

        // Kolom Username
        const usernameCell = document.createElement('td');
        usernameCell.textContent = user.username;
        row.appendChild(usernameCell);

        // Kolom Password
        const passwordCell = document.createElement('td');
        passwordCell.textContent = user.password; // Menampilkan password (hati-hati dengan keamanan!)
        row.appendChild(passwordCell);

        // Kolom Role
        const roleCell = document.createElement('td');
        roleCell.textContent = user.role;
        row.appendChild(roleCell);

        tableBody.appendChild(row);
    });
});
