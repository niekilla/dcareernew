function saveProfile(event) {
  event.preventDefault();

  const profileData = {
    companyName: document.getElementById("companyName").value,
    businessSector: document.getElementById("businessSector").value,
    companyDescription: document.getElementById("companyDescription").value,
    numberOfEmployees: document.querySelector('input[name="numberOfEmployees"]:checked').value,
    phoneNumber: document.getElementById("phoneNumber").value,
    companyWebsite: document.getElementById("companyWebsite").value,
  };

  localStorage.setItem('companyProfile', JSON.stringify(profileData));

  // Optionally, show a success message or redirect
  alert('Profil perusahaan berhasil disimpan!');
}

document.addEventListener("DOMContentLoaded", function() {
  const storedProfile = localStorage.getItem('companyProfile');

  if (storedProfile) {
    const profileData = JSON.parse(storedProfile);
    document.getElementById("companyUsername").textContent = profileData.companyName;

    // Populate other profile fields if needed
    document.getElementById("companyName").value = profileData.companyName;
    document.getElementById("businessSector").value = profileData.businessSector;
    document.getElementById("companyDescription").value = profileData.companyDescription;
    document.querySelector(`input[name="numberOfEmployees"][value="${profileData.numberOfEmployees}"]`).checked = true;
    document.getElementById("phoneNumber").value = profileData.phoneNumber;
    document.getElementById("companyWebsite").value = profileData.companyWebsite;
  }
});
