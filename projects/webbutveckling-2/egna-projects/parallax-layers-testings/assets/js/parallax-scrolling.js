// Source: https://www.youtube.com/watch?v=Dxm6EwvQIl8

window.addEventListener('scroll', function (e) {
    const target = document.querySelectorAll('.scroll');

    var i = 0,
        length = target.length;

    for (i; i < length; i++) {
        var pos = window.pageYOffset * target[i].dataset.scrollSpeed;

        if (target[i].hasAttribute('data-height')) {
            var addHeight =
                window.innerHeight * (target[i].dataset.height / 100);
        }

        target[i].style.transform = `translateY(${pos + addHeight}px)`;
    }

    // console.log(window.pageYOffset);
});
