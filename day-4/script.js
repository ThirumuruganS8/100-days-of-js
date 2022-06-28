const modal = document.querySelector(".modal");
const btn = document.querySelector(".btn");
const closeMod = document.querySelector(".close");

btn.addEventListener("click", openModel);
closeMod.addEventListener("click", closeModel);
modal.addEventListener("click", closeModel);

function openModel(e) {
  e.preventDefault();
  modal.style.display = "block";
}
function closeModel() {
  modal.style.display = "none";
}
