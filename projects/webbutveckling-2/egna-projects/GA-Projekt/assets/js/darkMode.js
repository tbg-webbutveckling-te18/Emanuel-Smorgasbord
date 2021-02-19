/* Source: http://jsfiddle.net/onigetoc/mk4uF/ */

/* ------------- jQuery ------------- */

// $('#darkModeSVG').click(() => {
//     $('#darkModeSVG').toggleClass('moveSwitch');
//     $('.toggleBGC').toggleClass('brightBGC darkBGC');
//     $('.toggleC').toggleClass('brightC darkC');
//     $('.toggleNav').toggleClass('brightNav darkNav');
// });

/* ------------- Vanilla JavaScript ------------- */

const drkModeBtn = document.querySelector('#darkModeSVG');
// const toggleNav = document.querySelector('.toggleNav');
const toggleBGC = document.querySelectorAll('.toggleBGC');
const toggleC = document.querySelectorAll('.toggleC');

drkModeBtn.addEventListener('click', () => {
    for (i = 0; i < toggleBGC.length; i++) {
        toggleBGC[i].classList.toggle('brightBGC');
        toggleBGC[i].classList.toggle('darkBGC');
    }
    for (i = 0; i < toggleC.length; i++) {
        toggleC[i].classList.toggle('brightC');
        toggleC[i].classList.toggle('darkC');
    }
    drkModeBtn.classList.toggle('moveSwitch');
    // toggleNav.classList.toggle('brightNav');
    // toggleNav.classList.toggle('darkNav');
});
