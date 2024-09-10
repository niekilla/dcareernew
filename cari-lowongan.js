// Function to handle job search
function searchJobs() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const jobList = document.getElementById('job-list');
    jobList.innerHTML = ''; // Clear previous results

    // Sample job data (you can replace this with an API call)
    const jobs = [
        { title: 'Position 1', description: 'Description of position 1.', location: 'Jakarta, Indonesia' },
        { title: 'Position 2', description: 'Description of position 2.', location: 'Surabaya, Indonesia' },
        { title: 'Position 3', description: 'Description of position 3.', location: 'Bandung, Indonesia' }
    ];

    // Filter and display jobs
    const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(searchTerm) || job.description.toLowerCase().includes(searchTerm));
    filteredJobs.forEach(job => {
        const li = document.createElement('li');
        li.innerHTML = `
                <a href="#">${job.title}</a>
                <div class="job-details">
                    <p>${job.description}</p>
                    <p><strong>Location:</strong> ${job.location}</p>
                </div>
                <span class="save-icon" onclick="savePosition('${job.title}', '${job.description}')">&#x1F4BE;</span>
            `;
        jobList.appendChild(li);
    });

    if (filteredJobs.length === 0) {
        jobList.innerHTML = '<p>No jobs found.</p>';
    }
}

// Function to save job to localStorage
function savePosition(title, description) {
    const savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];
    const jobExists = savedJobs.some(job => job.title === title);

    if (!jobExists) {
        savedJobs.push({ title: title, description: description });
        localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
        alert('Job saved!');
    } else {
        alert('Job already saved!');
    }
}

// Function to handle logout
function logout() {
    window.location.href = 'login.html'; // Replace with actual login URL
}