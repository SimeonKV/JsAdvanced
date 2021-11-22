function solve(arr) {
    let cars = {};



    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' | ');



        let car = addCar(cars, tokens[0]);
        addBrand(car, tokens[1], Number(tokens[2]));



    }

    Object.entries(cars)
        .forEach((entry) => {
            console.log(entry[0]);
            Object.entries(entry[1])
                .forEach(entry => {
                    console.log(`###${entry[0]} -> ${entry[1]}`);
                })
        })

    function addCar(cars, car) {

        if (!cars.hasOwnProperty(car)) {
            cars[car] = {};
        }

        return cars[car];
    }

    function addBrand(car, brand, qty) {
        if (!car.hasOwnProperty(brand)) {
            car[brand] = 0;
        }
        car[brand] = car[brand] + qty;


    }

}


solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);