function solve(arrOfTowns) {
    const objectOfTowns = {};


    for (let i = 0; i < arrOfTowns.length; i++) {

        let tokens = arrOfTowns[i].split(' <-> ');
        const [townName, townPopulation] = tokens;

        !objectOfTowns.hasOwnProperty(townName)  ? objectOfTowns[townName] = Number(townPopulation)
                                                : objectOfTowns[townName] += Number(townPopulation);

    }


    for(let town in objectOfTowns){
        console.log(`${town} : ${objectOfTowns[town]}`);
    }


}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);