document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the current user information from localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // Check if currentUser exists, if not, redirect to the login page
    if (!currentUser) {
        window.location.href = 'index.html';
        return;
    }

    // Destructure username and role from currentUser
    const { username, role } = currentUser;

    // Retrieve user data based on username and role
    const userData = JSON.parse(localStorage.getItem(`${username}-${role}`)) || {};

    // Display user profile information
    document.getElementById('profileName').textContent = `Nama: ${userData.name || 'Tidak tersedia'}`;
    document.getElementById('profileEmail').textContent = `Email: ${userData.email || 'Tidak tersedia'}`;
    document.getElementById('profilePhone').textContent = `Telepon: ${userData.phone || 'Tidak tersedia'}`;
    document.getElementById('profileNim').textContent = `NIM: ${userData.nim || 'Tidak tersedia'}`;
    document.getElementById('profileStatus').textContent = `Status: ${userData.status || 'Tidak tersedia'}`;

    // If the role is 'jobseeker', display additional profile information
    if (role === 'jobseeker') {
        if (userData.cv) {
            document.getElementById('profileCv').innerHTML = `CV: <a href="cvs/${userData.cv}" target="_blank">Download CV</a>`;
        }
        if (userData.photo) {
            const photoDataUrl = localStorage.getItem(`${username}-photo-data`);
            document.getElementById('profilePhoto').innerHTML = `Foto: <img src="${photoDataUrl}" alt="Foto Profil" style="max-width: 200px; max-height: 200px;">`;
        }
    }

    // Handle Edit Profile button click
    document.getElementById('editProfile').addEventListener('click', function() {
        window.location.href = 'pengaturan-profile.html'; // Redirect to the profile editing page
    });

    // Handle Logout button click
    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('currentUser'); // Clear the current user data
        window.location.href = 'index.html'; // Redirect to the login page or home page
    });
});

function handleFileUpload() {
    const fileInput = document.getElementById('cv');
    const file = fileInput.files[0];

    if (file && file.type === 'application/pdf') {
        const fileURL = URL.createObjectURL(file);

        // Menyimpan URL ke localStorage
        localStorage.setItem('cvUrl', fileURL);

        // Menampilkan pratinjau PDF
        const cvIframe = document.getElementById('cvIframe');
        cvIframe.src = fileURL;

        // Menyiapkan tautan unduh
        const cvDownloadLink = document.getElementById('cvDownloadLink');
        cvDownloadLink.href = fileURL;
        cvDownloadLink.style.display = 'block';

        // Menampilkan bagian pratinjau
        document.getElementById('cvPreview').style.display = 'block';
    } else {
        alert('Harap unggah file PDF.');
        fileInput.value = ''; // Menghapus file yang tidak valid
    }
}

