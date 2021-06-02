var car = {
    make: 'Volvo',
    model: 240,
    year: '1975 - 1993',
    fullCar: function () {
        return this.year + ', ' + this.make + ' ' + this.model;
    },
};

function changeText() {
    var element = document.getElementById('element');
    element.innerHTML = car.fullCar() + ' might be the best cars ever made.';
}
