window.addEventListener('load',function(){
	var swtch = document.getElementById("switchDrk");
    swtch.addEventListener("click", darkMode);
});

function darkMode() {
	var body = document.getElementById("body");
	body.classList.toggle("darkMode");

	var swtch = document.getElementById("switchDrk");
	swtch.classList.toggle("moveSlider");

	var about = document.getElementById("about");
	about.classList.toggle("svgDrkMode");

	var store = document.getElementById("store");
	store.classList.toggle("svgDrkMode");

	var contact = document.getElementById("contact");
	contact.classList.toggle("svgDrkMode");
}
