const MODAL_HIDEN_CLASS_NAME = 'is-hidden';

const formSubscribeModal = document.querySelector('#modal-subscribe');
const successModalSubscribe = document.querySelector('#success-modal-submit');
const formSubscribe = document.querySelector('#formSubscribe-submit-subscribe');

const openformSubscribeModalBtn = document.querySelector('#open-subscribe-btn');
const launchBtnSubscribe = document.querySelector('#subscribe-submit-btn');
const closeBtnsSubscribe = document.querySelectorAll('.close-btn-subscribe');

openformSubscribeModalBtn.addEventListener('click', () => {
    formSubscribeModal.classList.remove(MODAL_HIDEN_CLASS_NAME);
})

const closeformSubscribeModal = () => {
    formSubscribeModal.classList.add(MODAL_HIDEN_CLASS_NAME);
};

const closesuccessModalSubscribe = () => {
    successModalSubscribe.classList.add(MODAL_HIDEN_CLASS_NAME);
};

const opensuccessModalSubscribe = () => {
    successModalSubscribe.classList.remove(MODAL_HIDEN_CLASS_NAME);
};

closeBtnsSubscribe.forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation();
        closeformSubscribeModal();
        closesuccessModalSubscribe();
    })
})

function clearformSubscribeFields() {
    const modalFiends = formSubscribeModal.querySelectorAll('input');

    modalFiends.forEach( field => { 
        field.value = ''
    });
}
formSubscribe.addEventListener('submit', e => {
    e.preventDefault();
    const formSubscribeData = new FormData(formSubscribe);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formSubscribeData).toString(),
    })
      .then(() => {
        setTimeout(() => {
            closeformSubscribeModal();
            setTimeout(opensuccessModalSubscribe, 250);
            setTimeout(closesuccessModalSubscribe, 6000);
            clearformSubscribeFields();
        }, 250);
      })
      .catch((error) => console.log('Sending formSubscribe failed'));
})