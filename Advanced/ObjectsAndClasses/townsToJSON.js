function solve(arrOfTowns) {
    let arrOfObjs = [];
    let objKeys = arrOfTowns.shift().split(/\s*\|\s*/).filter(words => words.length > 0);

    function createTown(town, latitude, longitude) {
        let t = {
            Town: town,
            Latitude: latitude,
            Longitude: longitude
        }

        return t;
    }

    for (let town of arrOfTowns) {
        let tValues = town.split(/\s*\|\s*/).filter(town => town.length > 0);
        let name = tValues[0];
        let latitude = +Number(tValues[1]).toFixed(2);
        let longitude = +Number(tValues[2]).toFixed(2);

        let t = createTown(name, latitude, longitude);
        arrOfObjs.push(t);
    }

    console.log(JSON.stringify(arrOfObjs));


}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
])