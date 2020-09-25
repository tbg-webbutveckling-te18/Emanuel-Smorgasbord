// Greater than
var age = 19;
if (age >= 20) {
    console.log('Du får gå på systembolaget.');
}
else {
    console.log();
}

// If something is equal too
var lession = 'Web development';
if (lession == 'History') {
    console.log('We have: ' + lession);
}
else if (lession == 'Web development') {
    console.log('We have: ' + lession)
}
else {
    console.log('Spare time!')
}

var isSunny = false;
if (isSunny == true) {
    console.log('Put on some shorts today.')
}
else {
    console.log('Put on some warm clothes today.')
}

// Step 1
var d = new Date()

if (d.getHours() < 18) {
    console.log('Good Day!')
} else {
    console.log('Good Ebening!')
}

// Step 2
if (d.getHours() < 10) {
    console.log('Good morning!')
} else if (d.getHours() < 18) {
    console.log('Good day!')
} else {
    console.log('Good ebening!')
}

// Step 3
if (d.getHours() < 10) {
    if (d.getMonth() > 9 || d.getMonth() < 2) {
        console.log('Go ahead and sleep like a bear!')
    } else {
        console.log('Good morning!')
    }
} else if (d.getHours() < 18) {
    console.log('Good day!')
} else {
    console.log('Good ebening!')
}

var grade = 'A';
switch(grade) {
    case 'A':
        console.log('You got an ' + grade + ', Great Job!');
        break;
    case 'B':
        console.log('You got a ' + grade + ', Great Job!');
        break;
    case 'C':
        console.log('You got a ' + grade + ', Great Job!');
        break;
    case 'D':
        console.log('You got a ' + grade + ', Great Job!');
        break;
    case 'E':
        console.log('You got an ' + grade + ', Great Job!');
        break;
    case 'F':
        console.log('You got an ' + grade + ', Great Job!');
        break;
    default:
        console.log('Unknown grade.')
}

switch(d.getDay()) {
    case 0:
        console.log('It is Sunday!')
        break;
    case 1:
        console.log('It is Monday!')
        break;
    case 2:
        console.log('It is Tuesday!')
        break;
    case 3:
        console.log('It is Wednesday!')
        break;
    case 4:
        console.log('It is Thursday!')
        break;
    case 5:
        console.log('It is Friday!')
        break;
    case 6:
        console.log('It is Saturday!')
        break;
}