const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const res = ingredients.map((itm) => {
  //мепнули масив
  const liEl = document.createElement("li"); // створили елемент li
  liEl.textContent = itm; //додали текст
  liEl.classList.add("item"); // додали клас
  console.log(liEl);

  return liEl; // на кожній ітераціі повертаєм один створенний елемент
});
console.log(res); // отримали масив li  елементів

const ulEl = document.querySelector("#ingredients"); // отримали посилання на html елемент
console.log(ulEl);
ulEl.append(...res); // розпилили масив і додали в DOM у кінець елементу після всіх дітей
