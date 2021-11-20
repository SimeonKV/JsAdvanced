function solve(arr) {
    let products = {};

    for (let i = 0; i < arr.length; i++) {
        let input = arr[i].split(' | ');

        let town = input[0];
        let product = input[1];
        let price = Number(input[2]);


        addProduct(products, product, town, price);
    }

    displayProductWithLowestPriceTown(products);


    function addProduct(products, product, town, price) {

        if (!products.hasOwnProperty(product)) {

            products[product] = new Map();
            products[product].set(town, price);

        } else {

            if (products[product].has(town)) {
                products[product].delete(town);
            }

            products[product].set(town, price);
        }

        return products;
    }

    function displayProductWithLowestPriceTown(products){
       
        let entries = Object.entries(products);

        for(let [product,mapOfTowns] of entries){

            let arrOfTowns = Array.from(mapOfTowns);
            arrOfTowns.sort((entryOne,entryTwo) => entryOne[1] - entryTwo[1]);
          
            console.log(`${product} -> ${arrOfTowns[0][1]} (${arrOfTowns[0][0]}) `)
          
        }

    }
}


solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);