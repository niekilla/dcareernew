function saveProfile() {
  const name = document.getElementById("profileName").value;
  const email = document.getElementById("profileEmail").value;
  const cvInput = document.getElementById("profileCV");
  const cvFile = cvInput.files[0];

  if (!name || !email || !cvFile) {
    alert("Semua kolom harus diisi.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const cvData = e.target.result;

    const userProfile = {
      name: name,
      email: email,
      cv: cvData
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
      const updatedUsers = users.map(user =>
        user.username === loggedInUser.username ? { ...user, profile: userProfile } : user
      );

      localStorage.setItem("users", JSON.stringify(updatedUsers));
      localStorage.setItem("loggedInUser", JSON.stringify({ ...loggedInUser, profile: userProfile }));
    }

    displayProfile();
  };

  reader.readAsDataURL(cvFile);
}

function displayProfile() {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (loggedInUser && loggedInUser.profile) {
    const { name, email, cv } = loggedInUser.profile;
    const dashboard = document.getElementById("dashboard");
    dashboard.innerHTML = `
          <p><strong>Nama Lengkap:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>CV:</strong> <a href="${cv}" target="_blank">Lihat CV</a></p>
      `;
  }
}

window.onload = displayProfile;
