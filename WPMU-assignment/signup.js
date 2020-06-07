const formSignup = document.getElementById('form-signup');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const eyeIcon = document.getElementById('eye-icon');

formSignup.addEventListener('submit', (event) => {
  event.preventDefault();
  formValidator();
  if (haveErrors) {
    setTimeout(() => {
      clearError(emailError, email);
      clearError(passwordError, password);
    }, 5000);
  }
});

let haveErrors = false;

const formValidator = () => {
  if (!name.value || !email.value || !password.value) {
    console.log('please fill all fields');
  }
  if (!emailValidator(email.value)) {
    displayError(emailError, email, 'Please enter a valid email address');
  }
  if (password.value.length < 8) {
    displayError(
      passwordError,
      password,
      'Password must have 8 characters minimum'
    );
  }
};

const emailValidator = (email) => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

const clearError = (errorElement, element) => {
  haveErrors = false;
  errorElement.innerText = null;
  element.nextElementSibling.style.color = '#999';
  element.style.border = '1px solid #ededed';
  eyeIcon.style.display = 'none';
  document.getElementById('password-alert').style.display = 'block';
};

const displayError = (errorElement, element, message) => {
  haveErrors = true;
  errorElement.innerText = message;
  element.nextElementSibling.style.color = 'red';
  element.style.border = '1px solid red';
  eyeIcon.style.display = 'block';
  if (element === password) {
    errorElement.style = 'position: relative; top: -1.2em; margin: 0;';
    document.getElementById('password-alert').style.display = 'none';
  }
};
