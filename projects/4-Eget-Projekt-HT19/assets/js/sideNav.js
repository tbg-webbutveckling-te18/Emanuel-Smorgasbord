// Open and Close SideNav on Button
window.addEventListener('load',function(){
	var slider = document.getElementById("burger");
    slider.addEventListener("click", sideNav);
});

function sideNav(){
    var slideNav = document.getElementById("sideNav");
    slideNav.classList.toggle("slideNav");

    var top = document.getElementById("burgerTop");
    top.classList.toggle("burgerTop");

    var mid = document.getElementById("burgerMid");
    mid.classList.toggle("burgerMid");

    var bot = document.getElementById("burgerBot");
    bot.classList.toggle("burgerBot");
}

//Close SideNav on CLick Outside
document.addEventListener("click", handleMousePos);

function handleMousePos(event) {
    var mouseClickWidth = event.clientX;
    if(mouseClickWidth >= 256){
        var slideNav = document.getElementById("sideNav");
        slideNav.classList.remove("slideNav");

        var top = document.getElementById("burgerTop");
        top.classList.remove("burgerTop");

        var mid = document.getElementById("burgerMid");
        mid.classList.remove("burgerMid");

        var bot = document.getElementById("burgerBot");
        bot.classList.remove("burgerBot");
    }
}
