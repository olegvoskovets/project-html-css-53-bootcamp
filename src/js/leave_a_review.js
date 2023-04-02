(() => {
  const refs = {
    openModalBtn: document.querySelector('[leave_a_review-modal-open]'),
    closeModalBtn: document.querySelector('[leave_a_review-modal-close]'),
    modal: document.querySelector('[leave_a_review-modal]'),
  };
  console.log('OOOOOOO');

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    console.log('open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
