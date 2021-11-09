function solve(matrix) {

    let biggestNum = matrix.reduce((acc, currentRow) => {
        acc.push(...currentRow);
        return acc;
    }, []).sort((firstNum,secNum) => secNum - firstNum).slice(0,1).join(' ');

    console.log(biggestNum);



}


solve([[20, 50, 10],
    [8, 33, 145]]
   );