var person = ['Nisse-Lasse', '69', 'BigUman'];

person.shift();

document.writeln(person[2]);

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
};

document.writeln(
    `<br></br>My name is ${user.name} and I am ${user.age} years old. I live in ${user.city}<br>I have no friends.`
);

user.shoutout();
