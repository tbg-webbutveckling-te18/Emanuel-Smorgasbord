/*
***************************************
            JS Scope
***************************************
*/
var p = document.getElementById('scopes');

// What happens in the function stays in the function.

// Declare
function localScope() {
    var localVar = 19;
    p.innerHTML = localVar;
}

// Call
localScope();

var globalVar = 'This is a global variable';

p.innerHTML = globalVar;
p.style.fontSize = '20px';
p.style.color = '#639';

function changeGlobalVar() {
    globalVar = 'Haha I got a new value now!';
    p.innerHTML = globalVar;
}

// Call
changeGlobalVar();

function tricky() {
    var globalVar = 'Am I a local variable?';
    p.innerHTML = globalVar;
}

// Call
tricky();
p.innerHTML = globalVar;

/* 
****************************************
JS functions - higher order functions
Simple explanation: A function that can take another function as an argument
****************************************
*/

function myTimer() {
    var d = new Date();
    var clock = document.getElementById('clock');
    clock.innerHTML = d.toLocaleTimeString();
}

myTimer();

var seconds = setInterval(myTimer, 1000);
var btnStopTime = document.getElementsByClassName('stopTime')[0];
var doomsStr = document.getElementById('doomsMessage');

btnStopTime.addEventListener('click', function () {
    clearInterval(seconds);
    doomsStr.innerHTML = 'Ha ha! Time has stopped forever!';
    doomsStr.style.transition = 'all .4s ease';
    doomsStr.style.fontSize = '4em';
    doomsStr.style.color = 'crimson';
});
