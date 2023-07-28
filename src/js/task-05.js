const refs = {
  inputEl: document.querySelector("#name-input"),
  spanEl: document.querySelector("#name-output"),
};

refs.inputEl.addEventListener("input", onInputUser);
function onInputUser(evt) {
  console.dir(evt.currentTarget.value);
  if (evt.currentTarget.value === "") {
    refs.spanEl.textContent = "Anonymous";
  } else {
    refs.spanEl.textContent = evt.currentTarget.value;
  }
}
