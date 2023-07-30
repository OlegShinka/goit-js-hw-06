const liEl = document.querySelectorAll(".item");
const ulEl = document.querySelectorAll(liEl.lastElementChild);

console.log("Numbers of categories:", liEl.length);
liEl.forEach(function (item) {
  console.log(ulEl);
  console.log("Category:", item.firstElementChild.textContent);

  console.log("Elements:", item.lastElementChild.children.length);
});
