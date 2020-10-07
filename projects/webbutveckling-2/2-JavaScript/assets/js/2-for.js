for (var i = 0; i < 10; i++) {
    document.writeln('Count is ' + i + '<br>');
}

for (var count = 1; count < 13; count += 2) {
    document.writeln('Count is ' + i + '<br>');
}

// Exercise 3

for (var i = -10; i < 20; i++) {
    document.writeln(i);
}

// Exercise 4

for (var i = 10; i % 2 == 0 && i < 41; i++) {
    document.writeln(i);
}

// Nested for loops
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

document.writeln('<br>');

for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        document.writeln('*');
    }
    document.writeln('<br>');
}

// Bonus 1
for (var i = 0; i <= 10; i++) {
    for (var j = 0; j <= 10; j++) {
        var multiplier = i * j;
        document.writeln(i + '*' + j + '=' + multiplier + '<br>');
    }
}

// Bonus 2
var favGames = ['CS:GO', 'Minecraft', 'League of Legends', 'PUBG', 'GTA 5'];

function numberIndex(i) {
    var suffix = '';
    if (i == 1) {
        var suffix = 'st';
        return suffix;
    } else if (i == 2) {
        var suffix = 'nd';
        return suffix;
    } else if (i == 3) {
        var suffix = 'rd';
        return suffix;
    } else {
        var suffix = 'th';
        return suffix;
    }
}

for (var i = 0; i < favGames.length; i++) {
    var spot = i + 1;
    document.writeln(
        'My ' + spot + numberIndex(spot) + ' is ' + favGames[i] + '<br>'
    );
}
