const ham = document.querySelector('#hamm')
const menu = document.querySelector('#menu')

ham.addEventListener('click', e => {
    ham.classList.toggle('show')
    menu.classList.toggle('show')
})