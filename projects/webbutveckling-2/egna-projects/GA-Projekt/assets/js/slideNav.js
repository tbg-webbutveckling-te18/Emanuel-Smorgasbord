/* Source: http://jsfiddle.net/onigetoc/mk4uF/ */

/* ------------- jQuery ------------- */

// $('.slideBtn').click(function () {
//     $('.navigation').toggleClass('slideNav');
//     $('.toggleBurgerTop').toggleClass('burgerTop');
//     $('.toggleBurgerMid').toggleClass('burgerMid');
//     $('.toggleBurgerBot').toggleClass('burgerBot');
// });

/* ------------- Vanilla JavaScript ------------- */

document.querySelector('.slideBtn').addEventListener('click', () => {
    document.querySelector('.navigation').classList.toggle('slideNav');
    document.querySelector('.toggleBurgerTop').classList.toggle('burgerTop');
    document.querySelector('.toggleBurgerMid').classList.toggle('burgerMid');
    document.querySelector('.toggleBurgerBot').classList.toggle('burgerBot');
});
