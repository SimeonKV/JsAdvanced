function solve(arr) {
    let catalogueOfProducts = {};


    for (let i = 0; i < arr.length; i++) {

        let tokens = arr[i].split(' : ');


        if (catalogueOfProducts.hasOwnProperty(tokens[0].charAt(0))) {
            let catalogue = catalogueOfProducts[tokens[0].charAt(0)];
            catalogue[tokens[0]] = Number(tokens[1]);

        } else {
            catalogueOfProducts[tokens[0].charAt(0)] = {};
            let productsObj = catalogueOfProducts[tokens[0].charAt(0)];
            productsObj[tokens[0]] = Number(tokens[1]);

        }
    }


    Object.entries(catalogueOfProducts).sort((valueOne, valueTwo) => {
            let firstKey = valueOne[0];
            let secondKey = valueTwo[0];

            if (firstKey > secondKey) {
                return 1
            } else if (firstKey < secondKey) {
                return -1;
            } else {
                return 0;
            }
        })
        .forEach((entry) => {
            console.log(entry[0]);

            let products = Object.entries(entry[1])
                .sort((valueOne, valueTwo) => {
                    let firstKey = valueOne[0];
                    let secondKey = valueTwo[0];

                    if (firstKey > secondKey) {
                        return 1
                    } else if (firstKey < secondKey) {
                        return -1;
                    } else {
                        return 0;
                    }
                })
                .forEach(entry => console.log(`  ${entry[0]}: ${entry[1]}`));


        })

}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);