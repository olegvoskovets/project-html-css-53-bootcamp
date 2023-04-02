(() => {
  const refs = {
    openModalBtn: document.querySelector('[buy-now-modal-open-hero]'),
    closeModalBtn: document.querySelector('[buy-now-modal-close-hero]'),
    modal: document.querySelector('[buy-now-modal-hero]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
