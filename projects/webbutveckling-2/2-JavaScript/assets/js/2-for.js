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
