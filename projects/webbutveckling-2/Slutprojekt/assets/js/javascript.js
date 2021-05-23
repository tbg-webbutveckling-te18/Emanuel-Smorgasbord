const listOfDots = document.querySelector('.dots');

for (e = 0; e < 25; e++) {
    let addLi = document.createElement('li');
    listOfDots.appendChild(addLi);
}

//-----------------------------------------------------------------
//------------------    Scrolling Cards     -----------------------
//-----------------------------------------------------------------

const userCards = document.querySelector('.userCards');
var move = 0;
userCards.addEventListener('wheel', (event) => {
    if ((move === 0 && event.deltaY < 0) || (move < -200 && event.deltaY > 0)) {
        console.log('break');
        return;
    } else if (event.deltaY > 0) {
        event.preventDefault();
        move += -32;
        userCards.style.transform = `translateX(${move}rem)`;
    } else if (event.deltaY < 0) {
        event.preventDefault();
        move += 32;
        userCards.style.transform = `translateX(${move}rem)`;
    }
    console.log(move);
});

// Källa: https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event
/* function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;

    // Restrict scale
    scale = Math.min(Math.max(0.125, scale), 4);

    // Apply scale transform
    el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('div');
el.onwheel = zoom; */
