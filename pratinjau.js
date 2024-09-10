// Kirim lamaran
function sendApplication() {
    const jobData = JSON.parse(localStorage.getItem('jobData'));
    if (jobData) {
        const applications = JSON.parse(localStorage.getItem('applications')) || [];
        applications.push(jobData);
        localStorage.setItem('applications', JSON.stringify(applications));
        showNotification('Lowongan Berhasil Dikirim!', 'dodgerblue');
    }
    setTimeout(() => {
        window.location.href = 'job.html'; 
    }, 3000);
}
