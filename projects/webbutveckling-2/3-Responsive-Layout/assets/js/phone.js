// Select
var burger = document.querySelector('.burger');
var close = document.querySelector('.mobileMenuClose');
var menu = document.querySelector('.mobileMenu');

// Manipulate

burger.addEventListener('click', () => {
    menu.classList.toggle('mobileMenuToggle');
});

menu.addEventListener('click', () => {
    menu.classList.toggle('mobileMenuToggle');
});
