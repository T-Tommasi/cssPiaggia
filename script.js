const OPENMODAL = document.querySelector('#subscribe');
const SUBMITBUTTON = document.querySelector('#fakeSubmit');
const DIALOG = document.querySelector('dialog')

function openModal () {
    DIALOG.showModal();
    return;
}

function fakeSendData () {
    DIALOG.close();
    return;
}

OPENMODAL.addEventListener('click', openModal);
SUBMITBUTTON.addEventListener('click', fakeSendData);
