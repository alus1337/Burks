function redirectUser() {
  if (navigator.userAgentData.mobile) {
    window.location.href = "/maintenance.html";
  }
}

redirectUser();
