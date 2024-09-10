                document.addEventListener('DOMContentLoaded', () => {
                    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

                    if (loggedInUser) {
                        if (window.location.pathname === '/login.html' || window.location.pathname === '/register.html') {
                            window.location.href = 'dashboard.html';
                        }
                    }

                    // Register form handler
                    const registerForm = document.getElementById('registerForm');
                    if (registerForm) {
                        registerForm.addEventListener('submit', (e) => {
                            e.preventDefault();
                            const email = e.target.email.value;
                            const password = e.target.password.value;
                            const role = e.target.role.value;

                            const users = JSON.parse(localStorage.getItem('users')) || [];
                            if (users.some(user => user.email === email)) {
                                alert('Email is already registered.');
                                return;
                            }

                            users.push({ email, password, role });
                            localStorage.setItem('users', JSON.stringify(users));

                            window.location.href = 'login.html';
                        });
                    }

                    // Login form handler
                    const loginForm = document.getElementById('loginForm');
                    if (loginForm) {
                        loginForm.addEventListener('submit', (e) => {
                            e.preventDefault();
                            const email = e.target.email.value;
                            const password = e.target.password.value;

                            const users = JSON.parse(localStorage.getItem('users')) || [];
                            const user = users.find(u => u.email === email && u.password === password);

                            if (user) {
                                localStorage.setItem('loggedInUser', JSON.stringify(user));
                                window.location.href = 'dashboard.html';
                            } else {
                                alert('Invalid credentials');
                            }
                        });
                    }

                    // Dashboard page
                    const logoutBtn = document.getElementById('logoutBtn');
                    if (logoutBtn) {
                        logoutBtn.addEventListener('click', () => {
                            localStorage.removeItem('loggedInUser');
                            window.location.href = 'index.html';
                        });

                        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
                        if (loggedInUser) {
                            const jobList = document.getElementById('jobList');

                            const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
                            jobs.forEach(job => {
                                const li = document.createElement('li');
                                li.textContent = `${job.title}: ${job.description}`;
                                jobList.appendChild(li);
                            });
                        }
                    }

                    // Post job form handler
                    const postJobForm = document.getElementById('postJobForm');
                    if (postJobForm) {
                        postJobForm.addEventListener('submit', (e) => {
                            e.preventDefault();
                            const title = e.target.title.value;
                            const description = e.target.description.value;
                            const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

                            if (loggedInUser && loggedInUser.role === 'company') {
                                const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
                                jobs.push({ title, description, company: loggedInUser.email });
                                localStorage.setItem('jobs', JSON.stringify(jobs));

                                window.location.href = 'dashboard.html';
                            } else {
                                alert('You need to be logged in as a company to post a job.');
                            }
                        });
                    }
                });
