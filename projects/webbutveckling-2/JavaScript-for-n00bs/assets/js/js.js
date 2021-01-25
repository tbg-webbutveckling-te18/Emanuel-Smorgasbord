const target = document.querySelectorAll('.tabs');

var i = 0,
    length = target.length;

for (i; i < length; i++) {
    var indent = target[i].dataset.tabs * 2.5;

    target[i].style.marginLeft = `${indent}rem`;
}
