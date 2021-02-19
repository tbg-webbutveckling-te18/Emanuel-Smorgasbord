/*
------------------------- SOURCES -------------------------
https://www.youtube.com/watch?v=VYsVOamdB0g
https://www.youtube.com/watch?v=gBzsE0oieio
https://www.geeksforgeeks.org/how-to-get-the-child-node-index-in-javascript/
+ small syntax pages
*/

const prevButton = document.querySelector('.prevSlide');
const nextButton = document.querySelector('.nextSlide');

const slideContainer = document.querySelector('.slideContainer');
const sliders = Array.from(slideContainer.children);

const sliderNav = document.querySelector('.sliderNav');
const indicators = Array.from(sliderNav.children);

const slideWidth = () => sliders[0].getBoundingClientRect().width;

const resetStyles = (active, next) => {
    next.style.left = null;
    next.style.opacity = null;
    next.style.transition = null;
    next.style.transform = null;
    active.style.transition = null;
    active.style.transform = null;
};

const slideInFromLeft = (active, next) => {
    next.style.left = `-${slideWidth()}px`;
    next.style.opacity = '100%';
    next.style.transition = 'transform .4s ease-in-out';
    next.style.transform = `translateX(${slideWidth()}px)`;
    active.style.transition = 'transform .4s ease-in-out';
    active.style.transform = `translateX(${slideWidth()}px)`;

    setTimeout(() => {
        resetStyles(active, next);
        active.classList.remove('activeSlide');
        next.classList.add('activeSlide');
    }, 400);
};

const slideInFromRight = (active, next) => {
    next.style.left = `${slideWidth()}px`;
    next.style.opacity = '100%';
    next.style.transition = 'transform .4s ease-in-out';
    next.style.transform = `translateX(-${slideWidth()}px)`;
    active.style.transition = 'transform .4s ease-in-out';
    active.style.transform = `translateX(-${slideWidth()}px)`;

    setTimeout(() => {
        resetStyles(active, next);
        active.classList.remove('activeSlide');
        next.classList.add('activeSlide');
    }, 400);
};

const changeIndicator = (active, next) => {
    active.classList.remove('activeIndicator');
    next.classList.add('activeIndicator');
};

let slideTimer;
const runSlideTimer = () => {
    slideTimer = setInterval(() => {
        const activeSlider = document.querySelector('.activeSlide');
        const activeIndicator = document.querySelector('.activeIndicator');
        const activeIndex = Array.prototype.indexOf.call(
            slideContainer.children,
            activeSlider
        );

        if (activeIndex < sliders.length - 1) {
            var nextSlider = sliders[activeIndex + 1];
            var nextIndicator = indicators[activeIndex + 1];
        } else if (activeIndex === sliders.length - 1) {
            var nextSlider = sliders[0];
            var nextIndicator = indicators[0];
        }

        slideInFromRight(activeSlider, nextSlider);
        changeIndicator(activeIndicator, nextIndicator);
    }, 7000);
};

prevButton.addEventListener('click', () => {
    const activeSlider = document.querySelector('.activeSlide');
    const activeIndicator = document.querySelector('.activeIndicator');
    const activeIndex = Array.prototype.indexOf.call(
        slideContainer.children,
        activeSlider
    );

    if (activeIndex > 0) {
        var nextSlider = sliders[activeIndex - 1];
        var nextIndicator = indicators[activeIndex - 1];
    } else if (activeIndex === 0) {
        var nextSlider = sliders[sliders.length - 1];
        var nextIndicator = indicators[sliders.length - 1];
    }

    slideInFromLeft(activeSlider, nextSlider);
    changeIndicator(activeIndicator, nextIndicator);

    clearInterval(slideTimer);
    runSlideTimer();
});

nextButton.addEventListener('click', () => {
    const activeSlider = document.querySelector('.activeSlide');
    const activeIndicator = document.querySelector('.activeIndicator');
    const activeIndex = Array.prototype.indexOf.call(
        slideContainer.children,
        activeSlider
    );

    if (activeIndex < sliders.length - 1) {
        var nextSlider = sliders[activeIndex + 1];
        var nextIndicator = indicators[activeIndex + 1];
    } else if (activeIndex === sliders.length - 1) {
        var nextSlider = sliders[0];
        var nextIndicator = indicators[0];
    }

    slideInFromRight(activeSlider, nextSlider);
    changeIndicator(activeIndicator, nextIndicator);

    clearInterval(slideTimer);
    runSlideTimer();
});

sliderNav.addEventListener('click', (target) => {
    const activeSlider = document.querySelector('.activeSlide');
    const activeIndicator = document.querySelector('.activeIndicator');

    const activeIndex = Array.prototype.indexOf.call(
        slideContainer.children,
        activeSlider
    );

    const targetIndicator = target.target.closest('button');
    const targetIndex = Array.prototype.indexOf.call(
        sliderNav.children,
        targetIndicator
    );
    const targetSlider = sliders[targetIndex];

    if (!targetIndicator) {
        return;
    } else if (targetIndicator === activeIndicator) {
        return;
    }

    if (targetIndex < activeIndex) {
        slideInFromLeft(activeSlider, targetSlider);
        changeIndicator(activeIndicator, targetIndicator);
    } else if (targetIndex > activeIndex) {
        slideInFromRight(activeSlider, targetSlider);
        changeIndicator(activeIndicator, targetIndicator);
    }

    clearInterval(slideTimer);
    runSlideTimer();
});

runSlideTimer();
