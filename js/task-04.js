const refs = {
  btnIncr: document.querySelector('button[data-action="increment"]'),
  btnDecr: document.querySelector('button[data-action="decrement"]'),
  countEl: document.querySelector("#value"),
};

let counter = 0;
refs.btnIncr.addEventListener("click", onIncrBtnClick);
function onIncrBtnClick() {
  counter += 1;

  refs.countEl.textContent = counter;
}

refs.btnDecr.addEventListener("click", onDecrBtnClick);
function onDecrBtnClick() {
  counter -= 1;

  refs.countEl.textContent = counter;
}
