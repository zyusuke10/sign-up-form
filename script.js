const firstNameError = document.getElementById("firstName-error");
const lastNameError = document.getElementById("lastName-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const firstInput = document.querySelector(".component.first");
const lastInput = document.querySelector(".component.last");
const emailInput = document.querySelector(".component.email");
const passwordInput = document.querySelector(".component.password");
const firstErrorMsg = document.querySelector(".first-error-msg");
const lastErrorMsg = document.querySelector(".last-error-msg");
const emailErrorMsg = document.querySelector(".email-error-msg");
const passwordErrorMsg = document.querySelector(".password-error-msg");
const form = document.querySelector("#form");

form.addEventListener("submit", () => {
  if (firstInput.value === "") {
    firstNameError.style.visibility = "visible";
    firstErrorMsg.style.display = "block";
    firstInput.style.borderColor = "hsl(0, 100%, 74%)";
  } else if (firstInput.value !== "") {
    firstNameError.style.visibility = "hidden";
    firstErrorMsg.style.display = "none";
  }

  if (lastInput.value === "") {
    lastNameError.style.visibility = "visible";
    lastErrorMsg.style.display = "block";
    lastInput.style.borderColor = "hsl(0, 100%, 74%)";
  } else if (lastInput.value !== "") {
    lastNameError.style.visibility = "hidden";
    lastErrorMsg.style.display = "none";
  }

  if (!emailInput.value.includes("@gmail.com")) {
    emailError.style.visibility = "visible";
    emailErrorMsg.style.display = "block";
    emailInput.style.borderColor = "hsl(0, 100%, 74%)";
  } else if (emailInput.value.includes("@gmail.com")) {
    emailError.style.visibility = "hidden";
    emailErrorMsg.style.display = "none";
  }

  if (passwordInput.value === "") {
    passwordError.style.visibility = "visible";
    passwordErrorMsg.style.display = "block";
    passwordInput.style.borderColor = "hsl(0, 100%, 74%)";
  } else if (passwordInput.value !== "") {
    passwordError.style.visibility = "hidden";
    passwordErrorMsg.style.display = "none";
  }

  if (
    firstInput.value !== "" &&
    lastInput.value !== "" &&
    emailInput.value.includes("@gmail.com") &&
    passwordInput.value !== ""
  ) {
    firstInput.value = "";
    lastInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    firstInput.style.borderColor = "hsl(246, 25%, 87%)";
    lastInput.style.borderColor = "hsl(246, 25%, 87%)";
    emailInput.style.borderColor = "hsl(246, 25%, 87%)";
    passwordInput.style.borderColor = "hsl(246, 25%, 87%)";
  }
});

const cancelSubmit = () => {
  if (
    !(
      firstInput.value !== "" &&
      lastInput.value !== "" &&
      emailInput.value.includes("@gmail.com") &&
      passwordInput.value !== ""
    )
  ) {
    return false;
  }
};
