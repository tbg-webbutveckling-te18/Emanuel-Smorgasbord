window.addEventListener('load',function(){
	var swtch = document.getElementById("switchDrk");
    swtch.addEventListener("click", darkMode);
});

function darkMode() {
	var body = document.getElementById("body");
	body.classList.toggle("darkMode");

	var swtch = document.getElementById("switchDrk");
	swtch.classList.toggle("moveSlider");
}
