(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-subscribe]'),
    closeModalBtn: document.querySelector('[data-modal-close-subscribe]'),
    modal_subscribe: document.querySelector('[data-modal-subscribe]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal_subscribe.classList.toggle('is-hidden');
  }
})();
