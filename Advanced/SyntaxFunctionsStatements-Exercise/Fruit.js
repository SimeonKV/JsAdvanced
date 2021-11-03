function solve(fruit, fruitGramms, fruitPricePerKilogram) {
    let fruitKilograms = fruitGramms / 1000;
    let totalPrice = fruitPricePerKilogram * fruitKilograms;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${fruitKilograms.toFixed(2)} kilograms ${fruit}.`);

}


solve('orange', 2500, 1.80)