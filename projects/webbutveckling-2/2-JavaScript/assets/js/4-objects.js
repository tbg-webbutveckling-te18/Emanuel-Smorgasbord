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
    {
        author: 'Landin',
        comment:
            "You can't spell advertisements without semen between the tits.",
    },
];

// HTML Reference
var postOutput = document.querySelector('.post');

post.forEach(function (post) {
    postOutput.innerHTML += `Author: ${post.author} <br> Commented: ${post.comment} <br><br>`;
});

var input = document.querySelector('.updateCity');
input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        alert(`You clicked ${e.key}`);
    }
});
