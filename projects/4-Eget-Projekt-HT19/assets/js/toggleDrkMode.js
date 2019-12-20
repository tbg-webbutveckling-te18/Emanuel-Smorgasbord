window.addEventListener('load',function(){
	var slider = document.getElementById("switchDrk");
    slider.addEventListener("click", darkMode);
});

function darkMode() {
	var body = document.getElementById("body");
	body.classList.toggle("darkModeBody");

	var slider = document.getElementById("switchDrk");
	slider.classList.toggle("moveSlider");

	var fills = document.getElementById("fill");
	fills.classList.toggle("darkModeGrey");
}
