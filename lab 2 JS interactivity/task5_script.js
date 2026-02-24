function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;
  let password = document.getElementById("password").value;
  let message = document.getElementById("formMessage");

  if (name === "") {
    message.innerText = "Name cannot be empty";
    return;
  }

  if (age < 18 || age > 60) {
    message.innerText = "Age must be between 18 and 60";
    return;
  }

  if (!email.includes("@")) {
    message.innerText = "Invalid email";
    return;
  }

  if (password.length < 6) {
    message.innerText = "Password must be at least 6 characters";
    return;
  }

  if (confirm("Are you sure to submit?")) {
    alert("Form Submitted Successfully!");
    message.innerText = "Registration Successful!";
  }
}
