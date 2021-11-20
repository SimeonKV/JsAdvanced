function solve(inputArr){
let towns = {};

    for(let town of inputArr){
         let tokens = town.split(' <-> ');
         let townName = tokens[0];
         let townPopulation = Number(tokens[1]);

         if(towns.hasOwnProperty(townName)){
             towns[townName] = towns[townName] + townPopulation;
         }else{
             towns[townName] = townPopulation;
         }

    }


    Object.keys(towns).forEach(town => console.log(`${town} : ${towns[town]}`));

}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);