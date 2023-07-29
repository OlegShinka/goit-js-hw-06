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
// refs.btnDestroy.addEventListener("click", onClickDestroyBox);
let inputVal;
const arrDiv = [];
function createDiv(amount) {
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    let widthDiv = 30;
    let heightDiv = 30;
    for (let j = 0; j < amount; j += 1) {
      divEl.style.width = +`${widthDiv}px`;
      divEl.style.height = +`${heightDiv}px`;
      divEl.style.backgroundColor = "tomato";
    }

    console.log(divEl);
    arrDiv.push(divEl);
  }
  refs.boxEl.append(...arrDiv);
  // return arrDiv;
}

function onInputAmount(evt) {
  evt.preventDefault();
  inputVal = evt.currentTarget.value;
  console.log(inputVal);
  return inputVal;
}

function onClickCreateBox() {
  createDiv(inputVal);
}
