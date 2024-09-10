document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser) {
        window.location.href = 'index.html';
        return;
    }

    const { username, role } = currentUser;

    const fields = {
        jobseeker: ['name', 'email', 'phone', 'cv', 'photo', 'nim', 'status'],
        company: ['name', 'email']
    };

    const userData = JSON.parse(localStorage.getItem(`${username}-${role}`)) || {};

    // Populate form with existing user data
    fields[role].forEach(field => {
        if (userData[field]) {
            if (field === 'cv' || field === 'photo') {
                // For file inputs, leave value empty for new uploads
                document.getElementById(field).value = '';
            } else {
                document.getElementById(field).value = userData[field];
            }
        }
    });

    // Handle form submission
    document.getElementById('profileForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const profileData = fields[role].reduce((data, field) => {
            if (field === 'cv' || field === 'photo') {
                const fileInput = document.getElementById(field);
                if (fileInput.files.length > 0) {
                    const file = fileInput.files[0];
                    if (field === 'cv' && file.type !== 'application/pdf') {
                        alert('Hanya file PDF yang diperbolehkan untuk CV.');
                        return data;
                    }
                    if (field === 'photo' && !['image/jpeg', 'image/png'].includes(file.type)) {
                        alert('Hanya file JPG/PNG yang diperbolehkan untuk foto.');
                        return data;
                    }
                    data[field] = file.name; // Save the file name

                    // Save the file data URL
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const dataUrl = e.target.result;
                        localStorage.setItem(`${username}-${field}-data`, dataUrl);
                    };
                    reader.readAsDataURL(file);
                }
            } else {
                data[field] = document.getElementById(field).value;
            }
            return data;
        }, {});

        // Save profile data to localStorage
        localStorage.setItem(`${username}-${role}`, JSON.stringify(profileData));

        alert('Profil berhasil disimpan!');
        window.location.href = 'jobseeker-profile.html'; // Redirect to dashboard
    });
});

function previewLogo() {
    const file = document.getElementById('photo').files[0];
    const preview = document.getElementById('photoPreview');
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        preview.src = '';
        preview.style.display = 'none';
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

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
