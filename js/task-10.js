function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputEl: document.querySelector("input"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  btnCreate: document.querySelector("button[data-create]"),
  boxEl: document.querySelector("#boxes"),
};

refs.inputEl.addEventListener("input", onInputAmount);
refs.btnCreate.addEventListener("click", onClickCreateBox);
refs.btnDestroy.addEventListener("click", onClickDestroyBox);

let inputVal;
const arrDiv = [];
function createDiv(inputVal) {
  if (inputVal >= 1 && inputVal <= 100) {
    let widthDiv = 30;
    let heightDiv = 30;
    for (let i = 0; i < inputVal; i += 1) {
      const divEl = document.createElement("div");
      widthDiv += 10;
      heightDiv += 10;
      divEl.style.width = `${widthDiv}px`;
      divEl.style.height = `${heightDiv}px`;
      divEl.style.backgroundColor = getRandomHexColor();

      console.log(divEl);
      arrDiv.push(divEl);
    }
  }
  refs.boxEl.append(...arrDiv);
}

function onInputAmount(evt) {
  evt.preventDefault();
  inputVal = evt.currentTarget.value;
  return inputVal;
}

function onClickCreateBox() {
  createDiv(inputVal);
}
function onClickDestroyBox() {
  refs.boxEl.innerHTML = "";
}
