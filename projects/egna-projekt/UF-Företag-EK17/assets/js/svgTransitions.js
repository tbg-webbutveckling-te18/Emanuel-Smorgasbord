window.addEventListener('load',function(){
	"use strict";
	document.getElementById("about").addEventListener("click", about);
	document.getElementById("shop").addEventListener("click", shop);
	document.getElementById("contact").addEventListener("click", contact);
});

// ------------------------------------------------------ //

function about() {
	"use strict";
    document.getElementById("about").classList.toggle("clicked");
    document.getElementById("shop").classList.toggle("unclicked");
    document.getElementById("contact").classList.toggle("unclicked");
}

// ------------------------------------------------------ //

function shop() {
	"use strict";
    document.getElementById("about").classList.toggle("unclicked");
    document.getElementById("shop").classList.toggle("clicked");
    document.getElementById("contact").classList.toggle("unclicked");
}

// ------------------------------------------------------ //

function contact() {
	"use strict";
    document.getElementById("about").classList.toggle("unclicked");
    document.getElementById("shop").classList.toggle("unclicked");
    document.getElementById("contact").classList.toggle("clicked");
}
