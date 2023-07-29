const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const ulEl = document.querySelector(".gallery");

ulEl.style.display = "flex";
ulEl.style.justifyContent = "space-between";
ulEl.style.alignItems = "center";
ulEl.style.listStyle = "none";

function makeListImages(arr) {
  const markup = arr
    .map(
      ({ url, alt }) =>
        `<li><img class='img' src='${url}' alt='${alt}' style="border: 2px solid grey; width: 400px; height: auto; display: flex; flex-direction: row; "/></li> `
    )
    .join("");
  ulEl.insertAdjacentHTML("beforeend", markup);
  console.log(markup);
}
makeListImages(images);
