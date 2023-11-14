
// modal call
const mdlCallBtn = document.getElementById('mdlCall');
const mdlCallBtnSide = document.querySelector('.subMenu__footer--btn .button__call')
const mdlCallWindow = document.querySelector('.modal__call')
const mdlCallClose = document.getElementById('mdlCallClose') 


mdlCallBtn.addEventListener('click', function() {
    mdlCallWindow.classList.remove('modal__close');
    bodyLock.classList.add('modal-open');
})

mdlCallBtnSide.addEventListener('click', function() {
    mdlCallWindow.classList.remove('modal__close');
    bodyLock.classList.add('modal-open');
})

mdlCallClose.addEventListener('click', function() {
    mdlCallWindow.classList.add('modal__close');
    bodyLock.classList.remove('modal-open');
})

const mdlFdbckBtn = document.getElementById('mdlFdbck');
const mdlFdbckBtnSide = document.querySelector('.subMenu__footer--btn .button__message')
const mdlFdbckWindow = document.querySelector('.modal__feedback')
const mdlFdbckClose = document.getElementById('mdlfeedbackClose')
const bodyLock = document.querySelector('body')


mdlFdbckBtn.addEventListener('click', function() {
    mdlFdbckWindow.classList.remove('modal__close');
    bodyLock.classList.add('modal-open');
})

mdlFdbckBtnSide.addEventListener('click', function() {
    mdlFdbckWindow.classList.remove('modal__close');
    bodyLock.classList.add('modal-open');
})

mdlFdbckClose.addEventListener('click', function() {
    mdlFdbckWindow.classList.add('modal__close');
    bodyLock.classList.remove('modal-open');
})

