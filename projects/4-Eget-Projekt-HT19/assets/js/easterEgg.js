window.addEventListener('load',function(){
	var swtch = document.getElementById("moonDrk");
    swtch.addEventListener("click", easterEgg);
});

function easterEgg() {
	var body = document.getElementById("body");
	body.classList.toggle("easterEgg");
}
