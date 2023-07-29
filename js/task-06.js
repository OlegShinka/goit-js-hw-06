const refs = {
  inputEl: document.querySelector("#validation-input"),
};
refs.inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(evt) {
  console.log(evt.currentTarget.value);
  const inputBlur = evt.currentTarget.value.trim();

  if (inputBlur.length === Number(refs.inputEl.dataset.length)) {
    refs.inputEl.classList.add("valid");
    refs.inputEl.classList.remove("invalid");
  } else {
    refs.inputEl.classList.add("invalid");
    refs.inputEl.classList.remove("valid");
  }
}
