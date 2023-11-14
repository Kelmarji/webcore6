const btnBurger = document.getElementById('btnBurger')
const btnBurgerClose = document.getElementById('burger-close')
const sideMenu = document.querySelector('.sideMenu')
const bodyLock = document.querySelector('body')

btnBurger.addEventListener('click', function() {
    sideMenu.classList.remove('burger-open')
    bodyLock.classList.add('modal-open');
})

btnBurgerClose.addEventListener('click', function() {
    sideMenu.classList.add('burger-open')
    bodyLock.classList.remove('modal-open');
})


const closeOverlay = document.querySelector('.sideMenu__overlay');

closeOverlay.addEventListener('click', function() {
    sideMenu.classList.add('burger-open')
    bodyLock.classList.remove('modal-open');
})
