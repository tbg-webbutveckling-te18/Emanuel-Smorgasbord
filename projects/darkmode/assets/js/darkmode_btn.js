// Open and Close SideNav on Button
function brighten(){
  document.getElementById('body').style.backgroundColor = "#202020";
  document.getElementById('body').style.color = "#cccccc";
  document.getElementById('moon').style.opacity = "0";
  document.getElementById('sun').style.opacity = "100";
}
function darken(){
  document.getElementById('body').style.backgroundColor = "#cccccc";
  document.getElementById('body').style.color = "#202020";
  document.getElementById('moon').style.opacity = "100";
  document.getElementById('sun').style.opacity = "0";
}
