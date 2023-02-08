const openModalBtn = document.getElementById("openModalBtn");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");
const openClass = "open";

openModalBtn.addEventListener("click", handleModalOpen);
overlay.addEventListener("click", handleModalClose);
closeBtn.addEventListener("click", handleModalClose);
document.body.addEventListener("keydown", handleModalCloseOnESC);

function handleModalCloseOnESC({ key }) {
  if (key === "Escape") handleModalClose();
}

function handleModalOpen() {
  document.body.classList.add(openClass);
}
function handleModalClose() {
  document.body.classList.remove(openClass);
}
