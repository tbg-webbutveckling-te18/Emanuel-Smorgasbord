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

function tellFortune(job, place, partner, children) {
    document.getElementById(
        'pawagwaph'
    ).innerHTML = `You will be a ${job} in ${place}, and married to ${partner} and have ${children} kid.`;
}

var jobArray = [
    'Game Developer',
    'Web Developer',
    'Homeless',
    'Professional E-sport Player',
    'Dictator',
];
var placeArray = [
    'St.Petersburg',
    'Moscow',
    'Storuman',
    'Los Angeles',
    'Great Falls',
];
var partnerArray = ['Kennet', 'Leif', 'Olofmeister', 'Rekkless', 'KSI'];
var childrenArray = [0, '½', 1, 2, 3];

btnFortune.addEventListener('click', function () {
    var randomJob = jobArray[Math.floor(Math.random() * jobArray.length)];
    var randomPlace = placeArray[Math.floor(Math.random() * placeArray.length)];
    var randomPartner =
        partnerArray[Math.floor(Math.random() * partnerArray.length)];
    var randomChildren =
        childrenArray[Math.floor(Math.random() * childrenArray.length)];

    tellFortune(randomJob, randomPlace, randomPartner, randomChildren);
});
