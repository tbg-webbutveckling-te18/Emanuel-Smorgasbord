/*
------------------------- SOURCES -------------------------
https://www.youtube.com/watch?v=gBzsE0oieio
https://www.geeksforgeeks.org/how-to-get-the-child-node-index-in-javascript/
*/

const prevButton = document.querySelector('.prevSlide');
const nextButton = document.querySelector('.nextSlide');

const slideContainer = document.querySelector('.slideContainer');
const sliders = Array.from(slideContainer.children);

const sliderNav = document.querySelector('.sliderNav');
const indicators = Array.from(sliderNav.children);

const slideWidth = sliders[0].getBoundingClientRect().width;

const getSliders = () => {};

/* const resetStyles = (active, next) => {
} */

const slideInFromRight = (active, next) => {
    next.style.left = `${slideWidth}px`;
    next.style.display = 'list-item';
    next.style.transform = `translateX(-${slideWidth}px)`;
    active.style.transform = `translateX(-${slideWidth}px)`;

    setTimeout(() => {
        active.classList.remove('activeSlide');
        next.classList.add('activeSlide');
    }, 400);
};

nextButton.addEventListener('click', () => {
    var activeSlider = document.querySelector('.activeSlide');

    var activeSliderIndex = Array.prototype.indexOf.call(
        slideContainer.children,
        document.querySelector('.activeSlide')
    );

    if (activeSliderIndex < sliders.length - 1) {
        var nextSlider = sliders[activeSliderIndex + 1];
    } else if (activeSliderIndex === sliders.length - 1) {
        var nextSlider = sliders[0];
    }
    slideInFromRight(activeSlider, nextSlider);
});
