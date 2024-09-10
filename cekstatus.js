// Cek status login
function checkLoginStatus() {
    // Misalkan kita simpan status login di localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    return user && user.role === 'jobseeker'; // Pastikan periksa role atau status sesuai kebutuhan Anda
}

// Cek status login saat mengakses halaman job
if (!checkLoginStatus()) {
    showNotification('Anda harus login sebagai Jobseeker untuk melihat lamaran.');
    window.location.href = 'login.html'; // Redirect ke halaman login
} else {
    loadApplications(); // Muat lamaran jika login berhasil
}
