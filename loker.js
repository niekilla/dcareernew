function saveJob(event) {
  event.preventDefault();

  const jobData = {
    jobTitle: document.getElementById('jobTitle').value,
    jobPosition: document.getElementById('jobPosition').value,
    jobType: document.querySelector('input[name="jobType"]:checked').value,
    candidatesNeeded: document.getElementById('candidatesNeeded').value,
    jobActiveUntil: document.getElementById('jobActiveUntil').value,
    jobLocation: document.getElementById('jobLocation').value,
    jobDescription: document.getElementById('jobDescription').value,
    salaryMin: document.getElementById('salaryMin').value,
    salaryMax: document.getElementById('salaryMax').value,
    experience: document.querySelector('input[name="experience"]:checked').value,
    contactInfo: document.getElementById('contactInfo').value
  };

  // Get existing jobs from localStorage
  const jobs = JSON.parse(localStorage.getItem('jobs')) || [];

  // Check if a job with the same title already exists
  const existingJobIndex = jobs.findIndex(job => job.jobTitle === jobData.jobTitle);

  if (existingJobIndex !== -1) {
    // Update existing job
    jobs[existingJobIndex] = jobData;
  } else {
    // Add new job
    jobs.push(jobData);
  }

  localStorage.setItem('jobs', JSON.stringify(jobs));
  showNotification('Data Lowongan Tersimpan!', 'dodgerblue');
}

function loadJobListings() {
  const jobListings = document.getElementById('jobListings');
  const jobs = JSON.parse(localStorage.getItem('jobs')) || [];

  if (jobs.length === 0) {
    jobListings.innerHTML = '<p>Tidak ada lowongan yang tersedia.</p>';
    return;
  }

  jobListings.innerHTML = '';

  jobs.forEach((job, index) => {
    const jobElement = document.createElement('div');
    jobElement.classList.add('job-listing');

    jobElement.innerHTML = `
      <h3>${job.jobTitle}</h3>
      <div class="job-details">
        <p>Posisi: ${job.jobPosition}</p>
        <p>Kandidat Dibutuhkan: ${job.candidatesNeeded}</p>
        <p>Aktif Hingga: ${job.jobActiveUntil}</p>
        <p>Lokasi: ${job.jobLocation}</p>
        <p>Jenis Pekerjaan: ${job.jobType}</p>
         <p>Kontak: ${job.contactInfo}</p>
      </div>
      <div class="job-actions">
        <button onclick="previewJob(${index})">Pratinjau</button>
        <button onclick="editJob(${index})">Edit</button>
        <button onclick="duplicateJob(${index})">Duplikat</button>
        <button onclick="deleteJob(${index})">Hapus</button>
      </div>
    `;

    jobListings.appendChild(jobElement);
  });
}
