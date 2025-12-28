let isEmailValid = false;
  let isPasswordValid = false;

  function validateEmail() {
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");

    if (email.length > 3 && email.includes("@") && email.includes(".")) {
      emailError.textContent = "";
      isEmailValid = true;
    } else {
      emailError.textContent =
        "Make sure email is more than 3 characters and has @ and a .";
      isEmailValid = false;
    }

    showSuccessMessage();
  }

  function validatePassword() {
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");

    if (password.length > 8) {
      passwordError.textContent = "";
      isPasswordValid = true;
    } else {
      passwordError.textContent =
        "Make sure password is more than 8 characters.";
      isPasswordValid = false;
    }

    showSuccessMessage();
  }

  function showSuccessMessage() {
    const successMsg = document.getElementById("successMsg");

    if (isEmailValid && isPasswordValid) {
      successMsg.textContent = "All good to go!";
    } else {
      successMsg.textContent = "";
    }
  }

  function handleSubmit() {
    if (isEmailValid && isPasswordValid) {
      const confirmResult = confirm("Are you sure you want to submit?");

      if (confirmResult) {
        alert("Successful signup!");
      } else {
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("successMsg").textContent = "";
      }
    } else {
      alert("Please fix the validation errors before submitting.");
    }
  }