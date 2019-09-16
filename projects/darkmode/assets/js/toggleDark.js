window.addEventListener('load',function(){
	"use strict";
	var swtch = document.getElementById("switchDrk");
    body.addEventListener("click", darkMode);
});

function darkMode() {
	"use strict";
	var body = document.getElementById("body");
	body.classList.toggle("dark");
	
	var swtch = document.getElementById("switchDrk");
	swtch.classList.toggle("slider");
}