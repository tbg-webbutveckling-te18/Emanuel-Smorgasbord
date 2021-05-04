var cars = ['Volvo', 'Audi', 'Koeningsegg'];

for (i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

cars.forEach(carFunction);

function carFunction(car) {
    console.log(car);
}
