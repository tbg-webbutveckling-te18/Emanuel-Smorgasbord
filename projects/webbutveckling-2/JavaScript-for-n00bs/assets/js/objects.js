var car = {
    make: 'Volvo',
    model: 244,
    year: 1981,
    fullCar: function () {
        return this.year + ' ' + this.make + ' ' + this.model;
    },
};

var element = document.getElementById('element');
