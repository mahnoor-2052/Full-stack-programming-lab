$(document).ready(function () {

  function showErr(inputId, errId, msg) {
    $("#" + inputId).removeClass("valid").addClass("error");
    $("#" + errId).text(msg);
  }

  function showValid(inputId, errId) {
    $("#" + inputId).removeClass("error").addClass("valid");
    $("#" + errId).text("");
  }

  function validateName() {
    const val = $("#name").val().trim();
    if (!val) { showErr("name", "nameErr", "Full name is required."); return false; }
    if (val.length < 3) { showErr("name", "nameErr", "Name must be at least 3 characters."); return false; }
    showValid("name", "nameErr"); return true;
  }

  function validateEmail() {
    const val = $("#email").val().trim();
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!val) { showErr("email", "emailErr", "Email is required."); return false; }
    if (!re.test(val)) { showErr("email", "emailErr", "Enter a valid email address."); return false; }
    showValid("email", "emailErr"); return true;
  }

  function validatePassword() {
    const val = $("#password").val();
    if (!val) { showErr("password", "passErr", "Password is required."); return false; }
    if (val.length < 8) { showErr("password", "passErr", "Password must be at least 8 characters."); return false; }
    showValid("password", "passErr"); return true;
  }

  function validateConfirm() {
    const val = $("#confirm").val();
    const pass = $("#password").val();
    if (!val) { showErr("confirm", "confirmErr", "Please confirm your password."); return false; }
    if (val !== pass) { showErr("confirm", "confirmErr", "Passwords do not match."); return false; }
    showValid("confirm", "confirmErr"); return true;
  }

  // Validate on blur
  $("#name").on("blur", validateName);
  $("#email").on("blur", validateEmail);
  $("#password").on("blur", validatePassword);
  $("#confirm").on("blur", validateConfirm);

  // Submit
  $("#submitBtn").on("click", function () {
    const ok = validateName() & validateEmail() & validatePassword() & validateConfirm();
    if (ok) {
      $("#successMsg").slideDown(400);
      $("input").val("").removeClass("valid error");
      setTimeout(() => $("#successMsg").slideUp(400), 4000);
    }
  });

});
