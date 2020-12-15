var slides = Array.from(document.querySelectorAll('.navItem'));
const button = document.querySelector('#slideBtn');

button.addEventListener('click', () => {
    document.querySelector('.topBurger').classList.toggle('burgerTop');
    document.querySelector('.midBurger').classList.toggle('burgerMid');
    document.querySelector('.botBurger').classList.toggle('burgerBot');
    for (let i = 0; i < slides.length; i++) {
        setTimeout(() => {
            slides[i].classList.toggle('slideNav');
        }, i * 75);
    }
});
