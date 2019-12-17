window.addEventListener('load',function(){
	var slider = document.getElementById("switchDrk");
    slider.addEventListener("click", darkMode);
});

function darkMode() {
	var body = document.getElementById("body");
	body.classList.toggle("darkModeBody");

	var slider = document.getElementById("switchDrk");
	slider.classList.toggle("moveSlider");

	var grey = document.getElementsByClassName("st2");
	grey.classList.toggle("darkModeBlack");

	var black = document.getElementsByClassName("st1");
	black.classList.toggle("darkModeGrey");
}
