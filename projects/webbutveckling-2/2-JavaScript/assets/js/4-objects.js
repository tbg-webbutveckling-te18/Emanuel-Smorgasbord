var person = ['Nisse-Lasse', '69', 'BigUman'];

person.shift();

// document.writeln(person[2]);

var personFriends = ['Olle', 'Beng-Ha', 'Jan-E', 'Sven-E'];

// Perfect use case of an object
var user = {
    name: 'REKTorn',
    city: 'BigUman',
    age: 19,
    friends: ['Klenisen', 'Landin', 'mom'],
    isEvil: false,
    shoutout: function () {
        alert('Shoutout to my mom!');
    },
    levelUp: function () {
        this.age++;
        return this.age;
    },
};

var levelUpBtn = document.querySelector('.aging');
levelUpBtn.addEventListener('click', function () {
    firstOutput.innerHTML += `<br></br>My name is ${
        user.name
    } and I am ${user.levelUp()} years old. I live in ${
        user.city
    }<br>I have no friends.`;
});

var firstOutput = document.getElementById('userInfo');
firstOutput.innerHTML += `<br></br>My name is ${user.name} and I am ${user.age} years old. I live in ${user.city}<br>I have no friends.`;

// user.shoutout();

for (var i = 0; i < user.friends.length; i++) {
    console.log(user.friends[i]);
}

// use forEach if array
user.friends.forEach(function (friend) {
    console.log(friend);
});

// console.log(user.age);
// user.age++;
// console.log(user.age);

var post = [
    {
        author: 'Dennis',
        comment: 'Hey catz rules!',
    },
    {
        author: 'Arnold',
        comment: 'Nowai dude! Dogz rules!',
    },
    {
        author: 'Kamala',
        comment: 'Calm down. Both are equally nice.',
    },
];

// HTML Reference
var postOutput = document.querySelector('.post');

post.forEach(function (post) {
    postOutput.innerHTML += `Author: ${post.author} <br> Commented: ${post.comment} <br><br>`;
});

var input = document.querySelector('.updateCity');
var city = document.querySelector('.city');
input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        city.innerHTML = input.value;
        document.body.style.backgroundColor = '#007CF7';
        document.body.style.transform += 'rotate(10deg)';
        document.body.style.transform += 'scale(.9)';
    }
});

input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        document.body.style.transform = 'rotate(0deg)';
        document.body.style.transform = 'scale(1)';
    }
});

var toggle = document.querySelector('.btnToggle');
toggle.addEventListener('click', () => {
    // Bad Way
    // city.style.fontWeight = 'bold';
    // city.style.fontSize = '32px';
    // city.style.color = '#639';
    // city.style.textShadow = '2px 2px 0px black';

    // Good Way
    city.classList.toggle('changeText');
});

/*
***************************************
Create your own code - movieDB
***************************************
*/
// Create an array of movie objects
// Each movie should have a title, rating and hasWatched properties
// Iterate through the array with a forEach and print out something that looks like:
/* 
   - You have seen "Frozen" - 4.5 stars
   - You have not seen "Django" - 5 stars
   - You have seen "Vaiana" - 5 stars
   - You have not seen "Shawshank Redemption" - 5 stars
*/

var movieLib = [
    {
        title: 'Cars',
        rating: '7.1/10',
        hasWatched: true,
    },
    {
        title: 'Top Gun',
        rating: '6.9/10',
        hasWatched: true,
    },
    {
        title: 'Die Hard',
        rating: '8.2/10',
        hasWatched: false,
    },
    {
        title: 'Monsters INC.',
        rating: '8.1/10',
        hasWatched: true,
    },
    {
        title: 'It - Chapter 2',
        rating: '6.5/10',
        hasWatched: false,
    },
    {
        title: 'Alien',
        rating: '8.4/10',
        hasWatched: false,
    },
];

movieLib.forEach((m) => {
    var hasWatched = '';
    if (m.hasWatched === true) {
        var hasWatched = 'You have seen';
    } else {
        var hasWatched = 'You have not seen';
    }
    document.querySelector(
        '.movieLib'
    ).innerHTML += `${hasWatched} "${m.title}" - IMDB Rating ${m.rating} <br>`;
});

// Repetition objects

var opc = document.querySelector('#outputCalc');
var countObj = {
    someText: 'This is some text',
    multiply: (x, y) => {
        return x * y;
    },
    nextDay: () => {
        var d = new Date().getHours();
        return `<br> There is ${24 - d} hours left of this day`;
    },
};

opc.innerHTML = countObj.multiply(10, 5);
opc.innerHTML += countObj.nextDay();
