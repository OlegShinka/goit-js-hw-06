const refs = {
  spanEl: document.querySelector("#text"),
  input: document.querySelector("#font-size-control"),
};

refs.input.addEventListener("input", onInputSpan);
function onInputSpan(evt) {
  evt.preventDefault();

  let fontSizeSpan = `${evt.currentTarget.value}px`;
  //   console.log(fontSizeSpan);
  refs.spanEl.style.fontSize = fontSizeSpan;
}
