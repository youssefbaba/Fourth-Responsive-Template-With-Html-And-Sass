const header = document.querySelector(".header");
const menu = document.querySelector(".header-menu");
const overlay = document.querySelector(".overlay");


menu.addEventListener('click', () => {
    header.classList.toggle('open');
    overlay.classList.toggle('open');
})