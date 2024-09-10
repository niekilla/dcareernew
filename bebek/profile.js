document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = 'login.html';
    }

    const { username, role } = currentUser;

    const fields = {
        jobseeker: ['name', 'email', 'phone', 'cv', 'photo', 'nim', 'status'],
        company: ['name', 'email']
    };

    const userData = JSON.parse(localStorage.getItem(`${username}-${role}`)) || {};

    fields[role].forEach(field => {
        if (userData[field]) {
            if (field === 'cv' || field === 'photo') {
                // For file inputs, just set value to empty for new uploads
                document.getElementById(field).value = '';
            } else {
                document.getElementById(field).value = userData[field];
            }
        }
    });

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
                }
            } else {
                data[field] = document.getElementById(field).value;
            }
            return data;
        }, {});

        // Save profile data to localStorage
        localStorage.setItem(`${username}-${role}`, JSON.stringify(profileData));
        alert('Profil berhasil disimpan!');
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    });
});
