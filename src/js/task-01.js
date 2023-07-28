const liEl = document.querySelectorAll(".item");
const ulEl = document.querySelectorAll(liEl.lastElementChild);

console.log("Numbers of categories:", liEl.length);
liEl.forEach(function (liEl) {
  console.log("Category:", liEl.firstElementChild.textContent);

  console.log("Elements:", liEl.lastElementChild.children.length);
});
