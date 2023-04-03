(() => {
  const refs = {
    openModalBtn: document.querySelector('[thank_you-open]'),
    closeModalBtn: document.querySelector('[thank_you-close]'),
    thank_you_modal: document.querySelector('[thank_you-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.thank_you_modal.classList.toggle('is-hidden');
  }
})();
