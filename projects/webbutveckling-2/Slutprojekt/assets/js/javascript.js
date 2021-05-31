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

const leftArrow = document.querySelector('.moveLeft');
const rightArrow = document.querySelector('.moveRight');

function calcMaxMove() {
    let calc = -userCards.clientWidth + window.innerWidth;
    return calc;
}

function showArrows() {
    if (move < -320) {
        leftArrow.style.display = 'block';
    } else {
        leftArrow.style.display = 'none';
    }

    if (move > calcMaxMove() + 320) {
        rightArrow.style.display = 'block';
    } else {
        rightArrow.style.display = 'none';
    }
}

leftArrow.addEventListener('click', () => {
    move += 512;
    userCards.style.transform = `translateX(${move}px)`;
    showArrows();
});
rightArrow.addEventListener('click', () => {
    move += -512;
    userCards.style.transform = `translateX(${move}px)`;
    showArrows();
});

userCards.addEventListener('wheel', (event) => {
    console.log(move);
    if (
        (move === 0 && event.deltaY < 0) ||
        (move < calcMaxMove() && event.deltaY > 0)
    ) {
        return;
    } else if (event.deltaY > 0) {
        event.preventDefault();
        move += -64;
        userCards.style.transform = `translateX(${move}px)`;
        showArrows();
        return move;
    } else if (event.deltaY < 0) {
        event.preventDefault();
        move += 64;
        userCards.style.transform = `translateX(${move}px)`;
        showArrows();
        return move;
    }
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
