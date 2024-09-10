function formatRupiah(input) {
  let value = input.value.replace(/\D/g, '');
  value = new Intl.NumberFormat('id-ID').format(value);
  input.value = value;
}

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
    uploadCV: document.getElementById('uploadCV').value
  };

  localStorage.setItem('jobData', JSON.stringify(jobData));

  // Set notification message and type
  showNotification('Data Lowongan Tersimpan!', 'success');
}

function showNotification(message, type) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.className = `notification ${type}`; // Set the class for notification type
  notification.style.display = 'block';

  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000); // Hide notification after 3 seconds
}

function navigateToPreview() {
  saveJob(new Event('submit')); // Save job data before navigating
  window.location.href = 'Pratinjau.html';
}
