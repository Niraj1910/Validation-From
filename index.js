const nameError = document.querySelector(".name-error");
const numberError = document.querySelector(".number-error");
const emailError = document.querySelector(".email-error");
const msgError = document.querySelector(".msg-error");
const submitError = document.querySelector(".submit-error");

function validateName() {
  const inputName = document.querySelector("#input-name").value;

  if (inputName.length === 0) {
    nameError.innerHTML = "Name Required";
    return false;
  } else if (!inputName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write Full Name";
    return false;
  }

  nameError.innerHTML =
    '<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i>';
  return true;
}

function validateNumber() {
  const inputNumber = document.querySelector("#input-phone").value;

  if (inputNumber.length == 0) {
    numberError.innerHTML = "Phone no. Required";
    return false;
  }
  if (inputNumber.length !== 10) {
    numberError.innerHTML = "Phone no. should be of 10 digits";
    return false;
  }
  if (!inputNumber.match(/^[0-9]{10}$/)) {
    numberError.innerHTML = "Only digits please";
    return false;
  }

  numberError.innerHTML =
    '<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i>';
  return true;
}

function validateEmail() {
  const inputEmail = document.querySelector("#input-email").value;

  if (inputEmail.length == 0) {
    emailError.innerHTML = "Email Required";
    return false;
  }

  if (!inputEmail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Email invalid";
    return false;
  }

  emailError.innerHTML =
    '<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i>';
  return true;
}

function validateMessage() {
  const inputMessage = document.querySelector("#input-msg").value;

  let required = 30;
  let left = required - inputMessage.length;

  if (left > 0) {
    msgError.innerHTML = left + " more characters left";
    return false;
  }

  msgError.innerHTML =
    '<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i>';
  return true;
}

function validateButton() {
  if (
    !validateName() ||
    !validateNumber() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.innerHTML = "Please fix the errors to submit";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
