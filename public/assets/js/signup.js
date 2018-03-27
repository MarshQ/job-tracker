$(document).ready(function () {
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var firstName = $("input#firstName-input");
  var lastName = $("input#lastName-input");

  signUpForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      firstName: firstName.val().trim(),
      lastName: lastName.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }


    signUpUser(userData.firstName,userData.lastName,userData.email, userData.password,);
    firstName.val("")
    lastName.val("");
    emailInput.val("");
    passwordInput.val("");
  });

  function signUpUser(firstName,lastName,email, password) {
    $.post("/api/signup", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }).then(function (data) {
      window.location.replace(data);
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
