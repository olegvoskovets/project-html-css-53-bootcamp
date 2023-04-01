(() => {
  const refs = {
    openModalBtn: document.querySelector('[leave_a_review_about-open]'),
    closeModalBtn: document.querySelector('[leave_a_review_about-close]'),
    modal_reviews: document.querySelector('[leave_a_review_about-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal_reviews.classList.toggle('is-hidden');
  }
})();
