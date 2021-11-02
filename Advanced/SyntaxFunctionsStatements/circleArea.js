function solve(inputParam) {

    let paramType = typeof inputParam;

    if (paramType === 'number') {
        console.log((Math.PI * inputParam * inputParam).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${paramType}.`);
    }


}


solve('name');