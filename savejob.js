function saveJob(event) {
    event.preventDefault();
    var jobData = {
        jobTitle: document.getElementById("jobTitle").value,
        jobPosition: document.getElementById("jobPosition").value,
        jobType: document.querySelector('input[name="jobType"]:checked').value,
        candidatesNeeded: document.getElementById("candidatesNeeded").value,
        jobActiveUntil: document.getElementById("jobActiveUntil").value,
        jobLocation: document.getElementById("jobLocation").value,
        jobDescription: document.getElementById("jobDescription").value,
        salaryMin: document.getElementById("salaryMin").value,
        salaryMax: document.getElementById("salaryMax").value,
        experience: document.querySelector('input[name="experience"]:checked').value,
        contactInfo: document.getElementById("contactInfo").value,
    };

    localStorage.setItem("jobData", JSON.stringify(jobData));
    console.log("Data disimpan:", jobData);  // Debugging
    showNotification('Data Lowongan Tersimpan!', 'dodgerblue');
}

function showNotification(message, color) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.style.backgroundColor = color;
  notification.style.display = 'block';

  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000); // Hide notification after 3 seconds
}

function navigateToPreview() {
  saveJob(new Event('submit'));
  window.location.href = 'Pratinjau.html';
}
