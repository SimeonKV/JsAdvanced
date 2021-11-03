function solve(input) {
    let arrOfNums = input.toString().split('');
    let setOfNums = new Set();
    let sumOfNums = 0;

    for (let i = 0; i < arrOfNums.length; i++) {
        sumOfNums += +arrOfNums[i];
        setOfNums.add(arrOfNums[i]);
    }


    let sameNumberCheck = checkSameNumber(setOfNums);

    console.log(sameNumberCheck);
    console.log(sumOfNums);

    function checkSameNumber(set) {
        return set.size === 1;
    }

}

solve(2222222)