const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    let pos = window.pageYOffset;
    let height = window.innerHeight;

    if (height * 0.4 <= pos) {
        header.style.transition = 'transform .4s ease-in-out';
        header.style.transform = 'translateY(100%)';
        header.classList.add('shrinkHeader');
    } else {
        header.style.transition = 'none';
        header.style.transform = 'translateY(0)';
        header.classList.remove('shrinkHeader');
    }
});
