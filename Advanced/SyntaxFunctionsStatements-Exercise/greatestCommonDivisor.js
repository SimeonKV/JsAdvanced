function solve(numOne, numTwo) {
    let minNumber = Math.min(numOne, numTwo);
    let greatestCommonDivisor = 0;

    for (let i = 1; i <= minNumber; i++) {

        let commonDivisor = commonDivisiorCheck(numOne, numTwo, i);

        if (commonDivisor) {
            if (greatestCommonDivisor < i) {
                greatestCommonDivisor = i;
            }

        }

    }


    console.log(greatestCommonDivisor);

    function commonDivisiorCheck(numberOne, numberTwo, index) {

        return numOne % index === 0 && numTwo % index === 0;


    }

}

solve(254,458);