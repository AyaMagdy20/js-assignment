var userName = document.getElementById("name");
var mail = document.getElementById("mail");
var password = document.getElementById("password");
var btn = document.getElementById("btn");
var success = document.getElementById("successfulText");
var required = document.getElementById("reqiuredText");

var users = [];
if (localStorage.getItem("users") != null) {
  users = localStorage.getItem(JSON.parse("users"));
} else {
  users = [];
}
btn.addEventListener("click", function () {
  if (userName.value == "" || mail.value == "" || password.value == "") {
    required.classList.remove("d-none");
  } else {
    var info = {
      nameValue: userName.value,
      mailValue: mail.value,
      passwordValue: password.value,
    };
    required.classList.add("d-none");
    if (checkEmail() == true) {
      alert("existted mail, try ageain");
    } else {
      users.push(info);
      localStorage.setItem("user", JSON.stringify(users));
      reset();
    }
  }
});
function getSuccess() {
  success.classList.replace("d-none", "d-block");
  success.innerHTML = "Success";
  success.style.color = "green";
}
function reset() {
  userName.value = "";
  mail.value = "";
  password.value = "";
}
function checkEmail() {
  var mailValue = mail.value;
  for (var i = 0; i < users.length; i++) {
    if (users[i].mailValue == mailValue) {
      return true;
    } else {
      return false;
    }
  }
}
