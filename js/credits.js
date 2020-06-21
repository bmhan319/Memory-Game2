//Open Credits Modal
function modalOpen() {
  modal = document.querySelector('.modal')
  modalContainer = document.querySelector('.modalContainer ')
  modal.classList.add('modalOpen')
  modalContainer.classList.add('modalContainerOpen')
  modal.style.zIndex = "0"
}

//Close Credits Modal
function modalClose() {
  modal = document.querySelector('.modal')
  modalContainer = document.querySelector('.modalContainer ')
  modalContainer.classList.remove('modalContainerOpen')
  modal.classList.remove('modalOpen')
}