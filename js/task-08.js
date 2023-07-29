const refs = {
  inputEl: document.querySelector(".login-form"),
};
const userData = {};
refs.inputEl.addEventListener("submit", onInputSubmit);
function onInputSubmit(evt) {
  evt.preventDefault();
  // console.log(evt.currentTarget)
  const {
    elements: { email, password },
  } = evt.currentTarget;
  if ((password.value && email.value) === "") {
    alert("Увага! Всі поля повинні бути заповнені.");
  } else {
    userData.email = email.value;
    userData.password = password.value;
  }
  console.log(userData);

  refs.inputEl.reset();
}
