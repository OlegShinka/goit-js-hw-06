function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyMain = document.querySelector("body");
const spanEl = document.querySelector(".color");

const btnEl = document.querySelector(".change-color");
btnEl.addEventListener("click", onBtnClick);
function onBtnClick(evt) {
  bodyMain.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}
