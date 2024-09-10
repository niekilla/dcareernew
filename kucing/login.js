function login() {
    // Mengambil nilai dari form login
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const role = document.getElementById('loginRole').value;

    // Validasi form
    if (!username || !password || !role) {
        alert('Silakan lengkapi semua field!');
        return;
    }

    // Simpan username dan peran di localStorage
    localStorage.setItem('loggedInUsername', username);
    localStorage.setItem('userRole', role);

    // Redirect ke halaman input data diri jika peran adalah jobseeker
    if (role === 'jobseeker') {
        window.location.href = 'profile_input.html';
    } else if (role === 'company') {
        // Redirect ke halaman dashboard perusahaan (Anda bisa menambahkan halaman ini jika ada)
        window.location.href = 'company_dashboard.html';
    }
}
