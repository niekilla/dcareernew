

// Load applications from localStorage
function loadApplications() {
    const applications = JSON.parse(localStorage.getItem('applications')) || [];
    const applicationsList = document.getElementById('applicationsList');
    applicationsList.innerHTML = '';

    if (applications.length === 0) {
        applicationsList.innerHTML = '<p>Tidak ada lamaran yang masuk.</p>';
        return;
    }

    applications.forEach(application => {
        const jobItem = document.createElement('div');
        jobItem.classList.add('job-item');
        jobItem.innerHTML = `
        <h3>${application.jobTitle}</h3>
            <p><strong>Posisi:</strong> ${application.jobPosition}</p>
            <p><strong>Tipe Pekerjaan:</strong> ${application.jobType}</p>
            <p><strong>Lokasi:</strong> ${application.jobLocation}</p>
            <p><strong>Rentang Gaji:</strong> ${application.salaryMin} - ${application.salaryMax}</p>
            <p><strong>Kandidat Dibutuhkan:</strong> ${application.candidatesNeeded}</p>
            <p><strong>Pengalaman Kerja:</strong> ${application.experience}</p>
            <p><strong>Aktif Hingga:</strong> ${application.jobActiveUntil}</p>
        `;
        applicationsList.appendChild(jobItem);
    });
}

// Handle job link click
document.getElementById('jobLink').addEventListener('click', function (e) {
    e.preventDefault();
    if (checkLoginStatus()) {
        document.getElementById('jobDashboard').style.display = 'block';
        loadApplications();
    } else {
        showNotification('Anda harus login sebagai Jobseeker untuk melihat lamaran.');
    }
});
