const modal = document.querySelector(".modal");
const btn = document.querySelector(".btn");
const closeMod = document.querySelector(".close");
const modalContent = document.querySelector(".modal-content");

btn.addEventListener("click", openModel);
closeMod.addEventListener("click", closeModel);
modal.addEventListener("click", closeModel);

function openModel(e) {
  e.preventDefault();
  modal.style.display = "block";
}
function closeModel() {
  modalContent.classList.add("slide-up");
  setTimeout(() => {
    modal.style.display = "none";
    modalContent.classList.remove("slide-up");
  }, 500);
}
