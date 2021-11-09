function solve(length, sequence) {
    let resArr = [1];


    for (let i = 1; i < length; i++) {
        let start = Math.max(i - sequence, 0);
        let sequenceOfNums = resArr.slice(start, i);

        let sumOfSeqOfNums = sequenceOfNums.reduce((acc, currElement) => acc + currElement, 0);

        resArr.push(sumOfSeqOfNums);

    }


    console.log(resArr.join(' '));
}


solve(6,3);