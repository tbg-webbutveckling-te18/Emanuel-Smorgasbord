// Source: https://www.youtube.com/watch?v=Dxm6EwvQIl8

const target = document.querySelectorAll('.scroll');
const bsp = Array.from(document.getElementsByClassName('content')[0].children); // bsp, box shadow positions

const positionElements = () => {
    /* target.forEach((t) => {
        var pos = window.pageYOffset * t.dataset.scrollSpeed;
        var yPosition = 0;
        if (t.hasAttribute('data-height')) {
            var yPosition = window.innerHeight * (t.dataset.height / 100);
        }

        t.style.transform = `translateY(${pos + yPosition}px)`;
    }); */

    for (i = 0; i < target.length; i++) {
        var pos = window.pageYOffset * target[i].dataset.scrollSpeed;
        var yPosition = 0;
        if (target[i].hasAttribute('data-height')) {
            var yPosition =
                window.innerHeight * (target[i].dataset.height / 100);
        }

        target[i].style.transform = `translateY(${pos + yPosition}px)`;
    }

    for (i = 0; i < bsp.length; i++) {
        var pos = window.pageYOffset * bsp[i].dataset.scrollSpeed;
        var yPosition = 0;
        if (bsp[i].hasAttribute('data-height')) {
            var yPosition = window.innerHeight * (bsp[i].dataset.height / 100);
        }

        bsp[i].style.boxShadow = `-8px ${
            pos + yPosition
        }px 4px rgba(0, 0, 0, 0.404)`;
    }
};

window.addEventListener('scroll', positionElements);

window.addEventListener('load', positionElements);
