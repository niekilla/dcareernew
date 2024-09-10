function saveProfile(event) {
  event.preventDefault(); // Prevent form submission

  const companyName = document.getElementById("companyName").value;
  const businessSector = document.getElementById("businessSector").value;
  const companyLogo = document.getElementById("companyLogo").files[0];
  const companyDescription = document.getElementById("companyDescription").value;
  const numberOfEmployees = document.querySelector('input[name="numberOfEmployees"]:checked').value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const companyWebsite = document.getElementById("companyWebsite").value;

  // Create an object to store the form data
  const profileData = {
    companyName,
    businessSector,
    companyDescription,
    numberOfEmployees,
    phoneNumber,
    companyWebsite
  };

  // Read the logo file and store it as a base64 string
  const reader = new FileReader();
  reader.onload = function(e) {
    profileData.companyLogo = e.target.result;

    // Save the profile data to local storage
    localStorage.setItem("companyProfile", JSON.stringify(profileData));

    // Show the profile preview
    showProfilePreview(profileData);
  };
  reader.readAsDataURL(companyLogo);
}
