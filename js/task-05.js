const refs = {
  inputEl: document.querySelector("#name-input"),
  spanEl: document.querySelector("#name-output"),
};

refs.inputEl.addEventListener("input", onInputUser);
function onInputUser(evt) {
  // console.dir(evt.currentTarget.value.trim());
  if (evt.currentTarget.value.trim() === "") {
    refs.spanEl.textContent = "Anonymous";
  } else {
    refs.spanEl.textContent = evt.currentTarget.value;
  }
}
