function saveEditedJob(event) {
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

  const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
  const editJob = JSON.parse(localStorage.getItem('editJob'));
  const jobIndex = jobs.findIndex(job => job.jobTitle === editJob.jobTitle);

  if (jobIndex !== -1) {
    jobs[jobIndex] = jobData;
    localStorage.setItem('jobs', JSON.stringify(jobs));
    window.location.href = 'LowonganSaya.html';
  }
}

function populateForm() {
  const editJob = JSON.parse(localStorage.getItem('editJob'));
  if (editJob) {
    document.getElementById('jobTitle').value = editJob.jobTitle;
    document.getElementById('jobPosition').value = editJob.jobPosition;
    document.querySelector(`input[name="jobType"][value="${editJob.jobType}"]`).checked = true;
    document.getElementById('candidatesNeeded').value = editJob.candidatesNeeded;
    document.getElementById('jobActiveUntil').value = editJob.jobActiveUntil;
    document.getElementById('jobLocation').value = editJob.jobLocation;
    document.getElementById('jobDescription').value = editJob.jobDescription;
    document.getElementById('salaryMin').value = editJob.salaryMin;
    document.getElementById('salaryMax').value = editJob.salaryMax;
    document.querySelector(`input[name="experience"][value="${editJob.experience}"]`).checked = true;
    document.getElementById('contactInfo').value = editJob.contactInfo;
  }
}

window.onload = populateForm;