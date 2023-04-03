const MODAL_ACTIVE_CLASS_NAME = 'modal-active';

const formModal = document.querySelector('#modal-order');
const successModal = document.querySelector('#success-modal-order');
const form = document.querySelector('#form-order');

const openFormModalBtn = document.querySelectorAll('.open-order-modal-btn');
const launchBtn = document.querySelector('#order-submit-btn');
const closeBtns = document.querySelectorAll('.close-btn-order');

openFormModalBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        formModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
    })
})
// openFormModalBtn.addEventListener('click', () => {
//     formModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
// })

const closeFormModal = () => {
    formModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
};

const closeSuccessModal = () => {
    successModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
};

const openSuccessModal = () => {
    successModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
};

closeBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation();
        closeFormModal();
        closeSuccessModal();
    })
})

function clearFormFields() {
    const modalFiends = formModal.querySelectorAll('input');

    modalFiends.forEach( field => { 
        field.value = ''
    });
}
form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setTimeout(() => {
            closeFormModal();
            setTimeout(openSuccessModal, 250);
            setTimeout(closeSuccessModal, 6000);
            clearFormFields();
        }, 250);
      })
      .catch((error) => console.log('Sending form failed'));
})