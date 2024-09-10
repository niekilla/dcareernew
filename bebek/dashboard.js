document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = 'login.html';
    }

    const { username, role } = currentUser;

    const userData = JSON.parse(localStorage.getItem(`${username}-${role}`)) || {};

    document.getElementById('profileName').textContent = `Nama: ${userData.name || 'Tidak tersedia'}`;
    document.getElementById('profileEmail').textContent = `Email: ${userData.email || 'Tidak tersedia'}`;
    document.getElementById('profilePhone').textContent = `Telepon: ${userData.phone || 'Tidak tersedia'}`;
    document.getElementById('profileNim').textContent = `NIM: ${userData.nim || 'Tidak tersedia'}`;
    document.getElementById('profileStatus').textContent = `Status: ${userData.status || 'Tidak tersedia'}`;

    if (role === 'jobseeker') {
        if (userData.cv) {
            document.getElementById('profileCv').innerHTML = `CV: <a href="cvs/${userData.cv}" target="_blank">Download CV</a>`;
        }
        if (userData.photo) {
            document.getElementById('profilePhoto').innerHTML = `Foto: <img src="photos/${userData.photo}" alt="Foto Profil" style="max-width: 200px; max-height: 200px;">`;
        }
    }

    document.getElementById('editProfile').addEventListener('click', function() {
        window.location.href = 'profile.html';
    });

    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    });
});
