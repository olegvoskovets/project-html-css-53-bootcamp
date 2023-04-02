// цю модалку відкриває модалка leave_a_review_about при закритті.
// при отсиланні данних на сервер ми повинні відчинити цю модалку

(() => {
  const refs = {
    openModalBtn: document.querySelector('[thank_you_for_your_feedback-open]'),
    closeModalBtn: document.querySelector(
      '[thank_you_for_your_feedback-close]'
    ),
    modal_form_for_feedback: document.querySelector(
      '[thank_you_for_your_feedbac-modal]'
    ),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    console.log('open / close');
    refs.modal_form_for_feedback.classList.toggle('is-hidden-hidden');
  }
})();
