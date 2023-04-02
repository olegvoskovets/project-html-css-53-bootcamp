(() => {
  const refs = {
    openModalBtn: document.querySelector('[buy-now-modal-open-sellers]'),
    closeModalBtn: document.querySelector('[buy-now-modal-close-sellers]'),
    modal: document.querySelector('[buy-now-modal-sellers]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
