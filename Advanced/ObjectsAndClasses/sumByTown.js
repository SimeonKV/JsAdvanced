function solve(inputArr) {
    let towns = {};

    for (let i = 0; i < inputArr.length; i += 2) {
        let name = inputArr[i];
        let income = Number(inputArr[i + 1]);

        if (towns.hasOwnProperty(name)) {
            towns[name] = towns[name] + Number(income);
        } else {
            towns[name] = income;
        }

    }

    console.log(JSON.stringify(towns));


}

solve(['Sofia','20','Varna','3','Sofia','5','Varna','4']);