// Open and Close SideNav on Button
function openSideNav(){
    document.getElementById("sideNav").style.transform = "translateX(256px)"
}

function closeSideNav(){
    document.getElementById("sideNav").style.transform = "translateX(0px)"
}

//Close SideNav on CLick Outside
document.addEventListener("click", handleMousePos);

function handleMousePos(event) {
  var mouseClickWidth = event.clientX;
  if(mouseClickWidth >= 256){
    document.getElementById("sideNav").style.transform = "translateX(0px)"
  }
}
