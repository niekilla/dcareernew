function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}

window.onload = function() {
  document.getElementById("logoutButton").addEventListener("click", logout);
}
