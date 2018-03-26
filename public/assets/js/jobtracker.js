$(document).ready(function () {
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  signUpForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
<<<<<<< HEAD


=======
    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
>>>>>>> 84de67d4fabdd1eb2269d62cf4c1348d7ddbd97d
  });

  function signUpUser(email, password) {
    $.post("/api/signup", {
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
