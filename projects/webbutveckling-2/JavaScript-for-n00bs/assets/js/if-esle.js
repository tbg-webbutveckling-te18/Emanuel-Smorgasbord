x = '1';
if (x == 1) {
    console.log('kinda true');
}
if (x === 1) {
    console.log('false');
}
if (x === '1') {
    console.log('very true');
}

var testButtons = document.querySelector('.testButtons');

const removeAllClasses = () => {
    document.body.classList.remove('red');
    document.body.classList.remove('green');
    document.body.classList.remove('blue');
};

const changeElement = (x) => {
    if (x == 0) {
        document.body.style.backgroundColor = 'red';
    } else if (x == 1) {
        document.body.style.backgroundColor = 'green';
    } else if (x == 2) {
        document.body.style.backgroundColor = 'blue';
    } else if (x == 3) {
        document.body.style.backgroundColor = 'white';
    }
};

testButtons.addEventListener('click', (target) => {
    const targetElement = target.target.closest('li');
    const i = Array.prototype.indexOf.call(testButtons.children, targetElement);
    // console.log(i);
    removeAllClasses;
    changeElement(i);
});
