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
