const OPENMODAL = document.querySelector('#subscribe');
const SUBMITBUTTON = document.querySelector('#fakeSubmit');
const DIALOG = document.querySelector('dialog');
const FOOTERFAKELINKS = document.querySelectorAll('.footerMenuText');

function openModal () {
    DIALOG.showModal();
    return;
};

function fakeSendData () {
    DIALOG.close();
    return;
};

function thisLinkIsFake  () {
    alert('The link you just clicked is a fake applied to a template! Sorry bout that!');
};

OPENMODAL.addEventListener('click', openModal);
SUBMITBUTTON.addEventListener('click', fakeSendData);
FOOTERFAKELINKS.forEach(footerLink => {
    footerLink.addEventListener('click', thisLinkIsFake);
})
