function solve(arr) {
    let bottles = {};
    let juices = {};


    for (let i = 0; i < arr.length; i++) {

        let tokens = arr[i].split('=>');
        let fruit = tokens[0];
        let quantityJuice = Number(tokens[1]);

      let newQuantity = juices.hasOwnProperty(fruit)
        ? juices[fruit] + quantityJuice 
        : juices[fruit] = quantityJuice;

        juices[fruit] = newQuantity;


        pourIntoBottle(fruit,juices[fruit],juices,bottles);

    }

    function pourIntoBottle(fruit,quantity,juices,bottles){

          if(quantity >= 1000){
            let numberOfBottles = parseInt(quantity / 1000);
            let quantityLeft = quantity % 1000;
           
            let newNumOfBottles = bottles.hasOwnProperty(fruit) 
            ? bottles[fruit] + numberOfBottles
            : numberOfBottles;

            bottles[fruit] = newNumOfBottles;
            juices[fruit] = quantityLeft ;

          }

    }


    let entriesOfBottles = Object.entries(bottles);

    for(let [fruit,numberOfBottles] of entriesOfBottles){
       
       console.log(`${fruit}=> ${numberOfBottles}`)
    }

}


solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)