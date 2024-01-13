var mail = document.getElementById("mail");
var password = document.getElementById("password");
var btn = document.getElementById("btn");
var msgAlert = document.getElementById("alertMsg");
var usersLogin = [];
if (localStorage.getItem("users") != null) {
  usersLogin = JSON.parse(localStorage.getItem("users"));
}
btn.addEventListener("click", function () {
  login();
  console.log(usersLogin);
  console.log(users);
});
function login() {
  if (accountCheck() == true) {
    window.location.href = "home.html";
  } else {
    getAlert("email or password not valid", "red");
  }
}
function getAlert(text, color) {
  msgAlert.classList.replace("d-none", "d-block");
  msgAlert.innerHTML = text;
  msgAlert.style.color = color;
}
function accountCheck() {
  for (var i = 0; i < usersLogin.length; i++) {
    if (
      users[i].mailValue == mail.value &&
      users[i].passwordValue == password.value
    ) {
      return true;
    }
  }

  return false;
}
