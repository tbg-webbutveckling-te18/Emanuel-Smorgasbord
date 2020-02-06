window.addEventListener('load',function(){
	var slider = document.getElementById("switchDrk");
    slider.addEventListener("click", darkMode);
});

window.addEventListener('load',function(){
	var slider = document.getElementById("mSwitchDrk");
    slider.addEventListener("click", darkMode);
});


function darkMode() {
	var body = document.getElementById("body");
	body.classList.toggle("darkModeBody");

	var slider = document.getElementById("switchDrk");
	slider.classList.toggle("moveSlider");

	var slider = document.getElementById("mSwitchDrk");
	slider.classList.toggle("moveSlider");
}
