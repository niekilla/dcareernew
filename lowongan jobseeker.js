document.addEventListener('DOMContentLoaded', () => {
    const jobForm = document.getElementById('job-form');
    const jobList = document.getElementById('job-list');
    const searchInput = document.getElementById('search-input');

    // Load existing jobs from localStorage
    const loadJobs = () => {
        const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
        jobList.innerHTML = '';
        jobs.forEach(job => {
            const li = document.createElement('li');
            li.textContent = `${job.company} - ${job.position}`;
            jobList.appendChild(li);
        });
    };

    // Save a job to localStorage
    const saveJob = (job) => {
        const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
        jobs.push(job);
        localStorage.setItem('jobs', JSON.stringify(jobs));
    };

    // Handle form submission
    jobForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const company = document.getElementById('company').value;
        const position = document.getElementById('position').value;

        if (company && position) {
            const job = { company, position };
            saveJob(job);
            loadJobs();
            jobForm.reset();
        }
    });

    // Search jobs
    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
        jobList.innerHTML = '';
        jobs
            .filter(job => job.company.toLowerCase().includes(filter) || job.position.toLowerCase().includes(filter))
            .forEach(job => {
                const li = document.createElement('li');
                li.textContent = `${job.company} - ${job.position}`;
                jobList.appendChild(li);
            });
    });

    // Initial load
    loadJobs();
});
