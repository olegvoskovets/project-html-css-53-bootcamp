(() => {
  const refs = {
    openModalBtn: document.querySelector('[leave_a_review_about-open]'),
    closeModalBtn: document.querySelector('[leave_a_review_about-close]'),
    modal_reviews: document.querySelector('[leave_a_review_about-modal]'),
  };
  console.log(refs);
  // console.log(
  //   'closeModalBtn= ',
  //   closeModalBtn,
  //   'openModalBtn=  ',
  //   openModalBtn,
  //   'modal_reviews=  ',
  //   modal_reviews
  // );

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal_reviews.classList.toggle('is-hidden');
  }
})();
